import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { IS_BROWSER } from './constants'

const sagaMiddleware = createSagaMiddleware()

export default (preloadedState = {}) => {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
    /* eslint-enable */

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
}
