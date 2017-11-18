import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ListScreen from './ListScreen';
import AddListScreen from './AddListScreen';

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

function HomeScreen({ navigation }) {
  return (
    <Tab screenProps={navigation} />
  );
}

HomeScreen.propTypes = ({
  navigation: PropTypes.object.isRequired,
});

listIcon.propTypes = ({
  tintColor: PropTypes.string.isRequired,
});

addToListIcon.propTypes = ({
  tintColor: PropTypes.string.isRequired,
});

export default HomeScreen;
