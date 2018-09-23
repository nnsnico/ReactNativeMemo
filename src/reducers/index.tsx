import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';
import { AppNavigator } from '../containers/AppContainer';
import { List } from 'immutable';

import Memo from '../models/Memo';
import { ADD_MEMO_NAME, GO_DETAIL_NAME, ADD_MEMO_PROPERTIES, GO_DETAIL_PROPERTIES, REMOVE_MEMO_NAME, REMOVE_MEMO_PROPERTIES } from '../actions/index';

const initialNavState: any = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'), null);

function nav(state: any = initialNavState, action: any) {
  switch (action.type) {
    case GO_DETAIL_NAME.properties.type: {
      return (
        AppNavigator.router.getStateForAction(
          NavigationActions.navigate({
            routeName: 'Detail',
            params: action.listItem,
          }),
          state,
        )
      );
    }
    default: {
      return AppNavigator.router.getStateForAction(action, state);
    }
  }
}

// load data list from LocalStorage
const initialMemoList: List<Memo> = List([]);

function memo(state: List<Memo> = initialMemoList, action: any): List<Memo> {
  switch (action.type) {
    case ADD_MEMO_NAME.properties.type: {
      return state.push({
        key: action.memo.key,
        title: action.memo.title,
        detail: action.memo.detail,
        createTime: action.memo.createTime,
      });
    }
    case ADD_MEMO_NAME.properties.typeOfAsync: {
      return state;
    }
    case REMOVE_MEMO_NAME.properties.type: {
      return state.filterNot(item => item.key === action.memo.key).toList()
    }
    case REMOVE_MEMO_NAME.properties.typeOfAsync: {
      return state;
    }
    default: {
      return state;
    }
  }
}

const AppReducer = combineReducers({
  nav,
  memo,
});

export default AppReducer;
