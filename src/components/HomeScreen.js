import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ListScreen from './ListScreen';
import AddListScreen from './AddListScreen';
import { addMemo } from '../actions/index';

function listIcon({ tintColor }) {
  return (
    <Icon name="list" size={24} color={tintColor} />
  );
}

function addToListIcon({ tintColor }) {
  return (
    <Icon name="add-to-list" size={24} color={tintColor} />
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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.AddNewMemoItem = this.AddNewMemoItem.bind(this);
  }

  AddNewMemoItem({ title, detail }) {
    this.props.screenProps.dispatch(addMemo(title, detail));
  }

  render() {
    const { navigation, memo } = this.props;
    return (
      <Tab
        screenProps={{
          navigation,
          memo,
          addNewMemoItem: this.AddNewMemoItem,
        }}
      />
    );
  }
}

HomeScreen.propTypes = ({
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
  memo: PropTypes.array.isRequired,
});

listIcon.propTypes = ({
  tintColor: PropTypes.string.isRequired,
});

addToListIcon.propTypes = ({
  tintColor: PropTypes.string.isRequired,
});

function mapStateToProps(state) {
  return ({
    memo: state.memo,
  });
}

export default connect(mapStateToProps)(HomeScreen);
