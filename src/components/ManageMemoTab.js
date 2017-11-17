import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import ListScreen from './ListScreen';
import AddListScreen from './AddListScreen';

const ManageMemoTab = ({ tintColor }) => TabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="list" size={24} color={tintColor} />,
    },
  },
  AddList: {
    screen: AddListScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="add-to-list" size={24} color={tintColor} />,
    },
  },
});

export default ManageMemoTab;
