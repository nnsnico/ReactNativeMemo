import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationContainer, StackNavigator } from 'react-navigation';

import DetailScreen from '../components/DetailScreen';
import HomeScreen from '../components/HomeScreen';

export const AppNavigator: NavigationContainer = StackNavigator({
  // 詳細画面
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail',
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
});

class AppWithNavigationState extends React.Component<any, any> {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })}
        screenProps={{ dispatch: this.props.dispatch }}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return ({
    nav: state.nav,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
