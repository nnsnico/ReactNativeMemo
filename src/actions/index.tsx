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

/*-------------------------------------------------------------*/

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

/*-------------------------------------------------------------*/

// REMOVE_MEMO
export interface REMOVE_MEMO_PROPERTIES {
  type: string,
  typeOfAsync?: string,
  memo?: Memo,
}

export namespace REMOVE_MEMO_NAME {
  export const properties: REMOVE_MEMO_PROPERTIES = {
    type: 'REMOVE_MEMO',
    typeOfAsync: 'REMOVE_MEMO_ASYNC',
  }
}

/*-------------------------------------------------------------*/

// CHANGE MEMO
export interface CHANGE_MEMO_PROPERTIES {
  type: string,
  memo?: Memo,
}

export namespace CHANGE_MEMO_NAME {
  export const properties = {
    type: 'CHANGE_MEMO',
  }
}
/*-------------------------------------------------------------*/

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

export function removeMemo(memo: Memo): REMOVE_MEMO_PROPERTIES {
  return {
    type: REMOVE_MEMO_NAME.properties.type,
    memo,
  }
}

export function removeMemoAsync(memo: Memo): REMOVE_MEMO_PROPERTIES {
  return {
    type: REMOVE_MEMO_NAME.properties.typeOfAsync,
    memo,
  }
}

export function changeMemo(memo: Memo): CHANGE_MEMO_PROPERTIES {
  return {
    type: CHANGE_MEMO_NAME.properties.type,
    memo,
  }
}