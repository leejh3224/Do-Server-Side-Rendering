const express = require('express')
const path = require('path')
const template = require('./ssr/template')
const ssr = require('./ssr/server')

const PORT = process.env.PORT || 3000
const app = express()

app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

app.listen(PORT, () => `your app is runnnig on ${PORT}`)

// ssr
app.get('/', (req, res) => {
    return ssr(res, 'hello SSR!')
})

// client side rendering
app.get('/client', (req, res) => {
    const response = template('hello Client!')
    res.send(response)
})
