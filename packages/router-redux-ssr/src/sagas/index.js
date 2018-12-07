import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC } from '../reducers/actions'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: INCREMENT })
}

export default function* rootSaga() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
