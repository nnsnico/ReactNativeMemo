import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';
import { AppNavigator } from '../containers/AppContainer';

import Memo from '../models/Memo';
import { ADD_MEMO_NAME, GO_DETAIL_NAME, ADD_MEMO_PROPERTIES, GO_DETAIL_PROPERTIES } from '../actions/index';

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
const initialMemoList: Memo[] = [];

function memo(state = initialMemoList, action: ADD_MEMO_PROPERTIES): Memo[] {
  switch (action.type) {
    case ADD_MEMO_NAME.properties.type: {
      return [
        ...state,
        {
          key: action.memo.key,
          title: action.memo.title,
          detail: action.memo.detail,
        },
      ];
    }
    case ADD_MEMO_NAME.properties.typeOfAsync: {
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
