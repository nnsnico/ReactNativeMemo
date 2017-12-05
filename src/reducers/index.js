import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';
import { AppNavigator } from '../containers/App';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialState, action) {
  switch (action.type) {
    case 'GO_DETAIL': {
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

const AppReducer = combineReducers({
  nav: nextState = nav,
});

export default AppReducer;
