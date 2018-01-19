import { put, takeEvery, all, call, select, take, fork, SelectEffect } from 'redux-saga/effects'

import LocalStorage from '../data/LocalStorage';
import { ADD_MEMO_PROPERTIES, addMemo } from '../actions/index';
import Memo from '../models/Memo';

function* initialLoadStorage() {
  // LocalStorage内のデータを全部ロードする(初期処理)
  const memos: Memo[] = yield LocalStorage.loadAllItems();
  for (const memo of memos) {
    yield console.log('memo', memo);
    yield put(addMemo(memo));
  }
}

function* addMemoAsync(action: ADD_MEMO_PROPERTIES) {
  // LocalStorageに保存する
  yield LocalStorage.saveItem(action.memo);
  yield put(addMemo(action.memo));
}

function* watchAddMemoAsync() {
  yield takeEvery('ADD_MEMO_ASYNC', addMemoAsync)
}

export default function* rootSaga() {
  yield fork(initialLoadStorage);
  yield all([
    watchAddMemoAsync()
  ]);
}