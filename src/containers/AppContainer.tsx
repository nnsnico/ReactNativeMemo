import * as React from 'react';
import { Alert, BackHandler, Button, Platform } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationContainer, StackNavigator, NavigationActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

import DetailScreen from '../components/DetailScreen';
import HomeScreen from '../components/HomeScreen';
import { removeMemoAsync, changeMemo } from '../actions/index';
import Memo from '../models/Memo';
import Colors from '../Colors';

export const AppNavigator: NavigationContainer = StackNavigator({
  // 詳細画面
  Detail: {
    screen: DetailScreen,
  },
  Home: {
    screen: HomeScreen,
  },
});

interface ContainerPropaties {
  dispatch: any;
  nav: any;
}

class AppWithNavigationState extends React.Component<ContainerPropaties, any> {
  constructor(props: ContainerPropaties) {
    super(props);
    this.saveEditMemoItem = this.saveEditMemoItem.bind(this);
    this.removeMemoItem = this.removeMemoItem.bind(this);
  }

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

  saveEditMemoItem(item: Memo): void {
    const { dispatch } = this.props;
    dispatch(changeMemo(item));
  }

  removeMemoItem(item: Memo): void {
    const { dispatch } = this.props;
    dispatch(removeMemoAsync(item));
    dispatch(NavigationActions.back());
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })}
        screenProps={{ removeMemoItem: this.removeMemoItem, saveEditMemoItem: this.saveEditMemoItem }}
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
