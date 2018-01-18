import Memo from '../models/Memo';

// ADD MEMO
export interface ADD_MEMO_PROPERTIES {
  type: string,
  typeOfAsync?: string,
  memo?: Memo,
}

export namespace ADD_MEMO_NAME {
  export const properties: ADD_MEMO_PROPERTIES = {
    type: 'ADD_MEMO',
    typeOfAsync: 'ADD_MEMO_ASYNC',
  }
}

// GO DETAIL
export interface GO_DETAIL_PROPERTIES {
  type: string,
  listItem?: Memo,
}

export namespace GO_DETAIL_NAME {
  export const properties: GO_DETAIL_PROPERTIES = {
    type: 'GO_DETAIL',
  }
}

// action creators
export function goDetail(item: Memo): GO_DETAIL_PROPERTIES {
  return {
    type: GO_DETAIL_NAME.properties.type,
    listItem: item,
  };
}

export function addMemo(memo: Memo): ADD_MEMO_PROPERTIES {
  return {
    type: ADD_MEMO_NAME.properties.type,
    memo,
  };
}

export function addMemoAsync(memo: Memo): ADD_MEMO_PROPERTIES {
  return {
    type: ADD_MEMO_NAME.properties.typeOfAsync,
    memo,
  }
}
