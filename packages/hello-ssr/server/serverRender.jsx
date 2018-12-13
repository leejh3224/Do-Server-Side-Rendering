import fs from 'fs'
import path from 'path'
import util from 'util'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

export default async (req, res, next) => {
    const readFile = util.promisify(fs.readFile)

    try {
        const html = await readFile(
            path.resolve(process.cwd(), 'dist/index.html'),
            'utf-8'
        )

        res.send(
            html.replace(
                '<div id="root"></div>',
                `<div id="root">${renderToString(<App />)}</div>`
            )
        )
    } catch (error) {
        next(error)
    }
}
