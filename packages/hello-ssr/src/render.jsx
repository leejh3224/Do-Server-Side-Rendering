import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { IS_BROWSER } from './constants'

if (IS_BROWSER) {
    render(<App />, document.getElementById('root'))
}
