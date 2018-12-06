const express = require('express')
const path = require('path')
const serverRender = require('./ssr/serverRender').default

const PORT = process.env.PORT || 3000
const app = express()

app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

// ssr
app.get('*', (req, res) => {
    return serverRender(req, res, 'hello, router-redux-ssr!')
})

app.listen(PORT, () => console.log(`your app is runnnig on ${PORT}`))
