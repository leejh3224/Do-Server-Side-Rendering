import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import rootReducer from './reducers'

/* eslint-disable no-underscore-dangle */
const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore(rootReducer, preloadedState)

render(
    <Router>
        <Provider store={store}>
            <Routes />
        </Provider>
    </Router>,
    document.getElementById('root')
)
