import { put, takeEvery, all, call, select, take, fork, SelectEffect } from 'redux-saga/effects'

import LocalStorage from '../data/LocalStorage';
import { ADD_MEMO_PROPERTIES, addMemo, REMOVE_MEMO_PROPERTIES, removeMemo } from '../actions/index';
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

function* removeMemoAsync(action: REMOVE_MEMO_PROPERTIES) {
  yield LocalStorage.removeItem(action.memo);
  yield put(removeMemo(action.memo));
}

function* watchAddMemoAsync() {
  yield takeEvery('ADD_MEMO_ASYNC', addMemoAsync)
}

function* watchRemoveMemoAsync() {
  yield takeEvery('REMOVE_MEMO_ASYNC', removeMemoAsync)
}

export default function* rootSaga() {
  yield fork(initialLoadStorage);
  yield all([
    watchAddMemoAsync(),
    watchRemoveMemoAsync(),
  ]);
}