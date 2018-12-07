const express = require('express')
const path = require('path')
const serverRender = require('./ssr/serverRender').default

const PORT = process.env.PORT || 3000
const app = express()

app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

// ssr
app.get('/', (req, res) => serverRender(res, 'hello SSR!'))

// client side rendering
app.get('/client', (req, res) => {
    const response = `
    <html>
        <head>
            <title>hello, Client!</title>
        </head>
        <body style="margin: 0;">
        <div id="root"></div>
        <script src="dist/bundle.js"></script>
        </body>
    </html>
    `
    res.send(response)
})

app.listen(PORT, () => console.log(`your app is runnnig on ${PORT}`))
