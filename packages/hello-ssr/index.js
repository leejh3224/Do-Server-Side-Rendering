const express = require('express')
const path = require('path')
const html = require('./ssr/html').default
const serverRender = require('./ssr/serverRender').default

const PORT = process.env.PORT || 3000
const app = express()

app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

app.listen(PORT, () => `your app is runnnig on ${PORT}`)

// ssr
app.get('/', (req, res) => {
    const script = '<script src="dist/server.js"></script>'
    return serverRender(res, 'hello SSR!', script)
})

// client side rendering
app.get('/client', (req, res) => {
    const script = '<script src="dist/client.js"> </script>'
    const response = html('hello Client!', script)
    res.send(response)
})
