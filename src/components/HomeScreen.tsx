import * as React from 'react';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import ListScreen from './ListScreen';
import AddMemoScreen from './AddMemoScreen';
import Memo from '../models/Memo';
import { addMemo, goDetail, addMemoAsync } from '../actions/index';
import Colors from '../Colors';

const Tab = TabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }: any) => (<Entypo name="list" size={24} color={tintColor} />),
    },
  },
  AddToList: {
    screen: AddMemoScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }: any) => (<Entypo name="add-to-list" size={24} color={tintColor} />),
    },
  },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: Colors.PRIMARY,
      },
      activeTintColor: Colors.ACCENT,
      inactiveTintColor: '#737373',
      showLabel: true,
      showIcon: true,
    },
  });

interface HomeScreenProperties {
  screenProps: any;
  navigation: any;
  memo: Memo[];
}

class HomeScreen extends React.Component<HomeScreenProperties, any> {
  static navigationOptions = ({
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.PRIMARY_DARK,
    },
  })

  constructor(props: HomeScreenProperties) {
    super(props);
    this.addNewMemoItem = this.addNewMemoItem.bind(this);
    this.goDetailScreen = this.goDetailScreen.bind(this);
  }

  addNewMemoItem(memo: Memo): void {
    // add memo with saving in local storage by `addMemoAsync`
    this.props.navigation.dispatch(addMemoAsync(memo));
  }

  goDetailScreen(item: Memo): void {
    this.props.navigation.dispatch(goDetail(item));
  }

  render() {
    const { navigation, memo } = this.props;
    return (
      <Tab
        screenProps={{
          memo,
          addNewMemoItem: this.addNewMemoItem,
          goDetailScreen: this.goDetailScreen,
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
