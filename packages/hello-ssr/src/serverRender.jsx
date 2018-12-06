/**
 * Uses renderToNodeStream api.
 * Implementation is from https://www.styled-components.com/docs/advanced#server-side-rendering
 */
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from './App'

export default (res, title, script) => {
    res.write(
        `<html><head><title>${title}</title></head><body style="margin: 0;">`,
    )
    const sheet = new ServerStyleSheet()
    const jsx = sheet.collectStyles(<App />)
    const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx))

    stream.pipe(
        res,
        { end: false },
    )

    stream.on('end', () => res.end(`${script}</body></html>`))
}
