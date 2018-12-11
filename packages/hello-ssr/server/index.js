import express from 'express'
import path from 'path'
import { errorHandler } from '@junhyung3224/common'
import serverRender from './serverRender'

const PORT = process.env.PORT || 3000
const app = express()

app.use('/dist', express.static(path.resolve(process.cwd(), 'dist')))

app.use(serverRender)

app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
