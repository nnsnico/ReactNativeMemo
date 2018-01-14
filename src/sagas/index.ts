import { put, takeEvery, all, call, select } from 'redux-saga/effects'

function* addMemoAsync() {
    // TODO: LocalStorageに保存する
    yield put({ type: 'ADD_MEMO' })
}

function* watchAddMemoAsync() {
    yield takeEvery('ADD_MEMO_ASYNC', addMemoAsync)
}

export default function* rootSaga() {
    yield all([
        watchAddMemoAsync()
    ])
}