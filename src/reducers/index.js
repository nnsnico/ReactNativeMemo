import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';
import { AppNavigator } from '../containers/App';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case 'GO_DETAIL': {
      const navigateAction = NavigationActions.navigate({
        routeName: 'Detail',
        params: action.listItem,
      });
      console.log(action.listItem);
      nextState = AppNavigator.router.getStateForAction(
        navigateAction,
        state,
      );
      break;
    }
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
  }
  return nextState || state;
}

const AppReducer = combineReducers({
  nav,
});

export default AppReducer;
