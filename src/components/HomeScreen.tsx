import * as React from 'react';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ListScreen from './ListScreen';
import AddListScreen from './AddListScreen';
import { addMemo } from '../actions/index';

function listIcon(tintColor: string) {
  return (
    <Entypo name="list" size={24} color={tintColor} />
  );
}

function addToListIcon(tintColor: string) {
  return (
    <Entypo name="add-to-list" size={24} color={tintColor} />
  );
}

const Tab = TabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarIcon: listIcon,
    },
  },
  AddToList: {
    screen: AddListScreen,
    navigationOptions: {
      tabBarIcon: addToListIcon,
    },
  },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      backgroundColor: '#1fff1f',
    },
    activeTintColor: '#037aff',
    inactiveTintColor: '#737373',
    showLabel: false,
    showIcon: true,
  },
});

class HomeScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.addNewMemoItem = this.addNewMemoItem.bind(this);
  }

  addNewMemoItem(title: string, detail: string) {
    this.props.screenProps.dispatch(addMemo(title, detail));
  }

  render() {
    const { navigation, memo } = this.props;
    return (
      <Tab
        screenProps={{
          navigation,
          memo,
          addNewMemoItem: this.addNewMemoItem,
        }}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return ({
    memo: state.memo,
  });
}

export default connect(mapStateToProps)(HomeScreen);
