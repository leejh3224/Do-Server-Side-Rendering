/**
 * Check https://www.styled-components.com/docs/advanced#server-side-rendering
 */
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Routes from './Routes'
import configureStore from './configureStore'

export default (req, res, title) => {
    res.write(
        `<html><head><title>${title}</title></head><body style="margin: 0;"><div id="root">`,
    )
    const context = {}
    const store = configureStore()
    const sheet = new ServerStyleSheet()
    const jsx = sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </StaticRouter>,
    )
    const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx))

    stream.pipe(
        res,
        { end: false },
    )

    const preloadedState = store.getState()

    stream.on('end', () =>
        res.end(`
                </div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(
                        preloadedState,
                    ).replace(/</g, '\\u003c')}
                </script>
                <script src="dist/bundle.js"></script>
            </body>
        </html>`),
    )
}
