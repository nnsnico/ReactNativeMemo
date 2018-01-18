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
const initialMemoList: Memo[] = [
  {
    key: 'hoge',
    title: 'hogeの神秘',
    detail: 'hogeはすごいよ。とってもすごいんだよ。何よりもhogeしてhohohogegegeするのがすごい。やっぱすげぇわhogeは。ほら、そこの君もhogeのすごさを知ってきただろ？',
  },
  {
    key: 'fuga',
    title: 'fugaの宝具',
    detail: 'fugaの宝具はfuga神によって5000兆年もの間守られ続けてきた神秘の宝である。形状は「fuga」の形をした禍々しい風格を持つ。一度手にしたものはfuga神の呪いによって永遠にふがふが言い続けるであろう',
  },
  {
    key: 'piyo',
    title: '伝説の島piyo島',
    detail: 'piyopiyo!piyopiyopiyo!piyopiyopiyopiyopiyo!pipipipipipiiiiiiii!!!piyopiyopiyooooooooo!!!!!!!!\n二度と日本語がしゃべれなくなるぞ',
  },
];

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
