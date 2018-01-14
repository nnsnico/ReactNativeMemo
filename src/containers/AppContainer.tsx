import * as React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationContainer, StackNavigator, NavigationActions } from 'react-navigation';

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
  // Press to back by Android Back key
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

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
