/**
 * entry for server side rendering
 */
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App.jsx'

hydrate(<App />, document.querySelector('#app'))
