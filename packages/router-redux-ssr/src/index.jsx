import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import configureStore from './configureStore'

/* eslint-disable no-underscore-dangle */
const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__
/* eslint-enable */

const store = configureStore(preloadedState)

hydrate(
    <Router>
        <Provider store={store}>
            <Routes />
        </Provider>
    </Router>,
    document.getElementById('root')
)
