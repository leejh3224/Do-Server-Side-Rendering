/**
 * Check https://www.styled-components.com/docs/advanced#server-side-rendering
 */
import fs from 'fs'
import path from 'path'
import util from 'util'
import { JSDOM } from 'jsdom'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Routes from '../src/Routes'
import configureStore from '../src/configureStore'
import { fetchCounter } from '../src/api/counter'

export default (req, res, next) => {
    fetchCounter(async result => {
        const context = {}
        const readFile = util.promisify(fs.readFile)

        if (context.url) {
            res.writeHead(301, { location: context.url })
            res.end()
        } else {
            const store = configureStore()
            const sheet = new ServerStyleSheet()
            const jsx = renderToString(
                sheet.collectStyles(
                    <StaticRouter location={req.url} context={context}>
                        <Provider store={store}>
                            <Routes />
                        </Provider>
                    </StaticRouter>
                )
            )
            const styleTags = sheet.getStyleTags()
            const preloadedState = { counter: result } || store.getState()

            try {
                const html = await readFile(
                    path.resolve(process.cwd(), 'dist/index.html'),
                    'utf-8'
                )

                const dom = new JSDOM(html)

                const {
                    window: { document }
                } = dom

                document.querySelector('body').style.margin = '0px'

                // insert css style into head
                document
                    .querySelector('head')
                    .appendChild(
                        new JSDOM(styleTags).window.document.querySelector(
                            'style'
                        )
                    )

                // insert jsx into div id=root
                document
                    .querySelector('#root')
                    .appendChild(
                        new JSDOM(jsx).window.document.querySelector(
                            'body > div'
                        )
                    )

                // insert preloaded state
                document.querySelector('#root').after(
                    new JSDOM(
                        `
                        <script>
                            window.__PRELOADED_STATE__ = ${JSON.stringify(
        preloadedState
    ).replace(/</g, '\\u003c')}
                        </script>
                    `
                    ).window.document.querySelector('script')
                )

                // send serialized string
                res.send(dom.serialize())
            } catch (error) {
                next(error)
            }
        }
    })
}
