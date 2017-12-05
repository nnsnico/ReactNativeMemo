import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ListScreen from './ListScreen';
import AddListScreen from './AddListScreen';

const sampleList = [
  {
    key: 'hoge',
    title: 'hogeの神秘',
    detail: 'hogeはすごいよ。とってもすごいんだよ。何よりもhogeしてhohohogegegeするのがすごい。やっぱすげぇわhogeは。ほら、そこの君もhogeのすごさを知ってきただろ？',
  },
  {
    key: 'fuga',
    title: 'fugaの宝具',
    detail: 'fugaの宝具はfuga神によって5000兆年もの間守られ続けてきた神秘の宝である。形状は「fuga」の形をした禍々しい風格を持つ。一度手にしたものはfuga神の呪いによって永遠にふがふが言い続けるであろう',
  },
  {
    key: 'piyo',
    title: '伝説の島piyo島',
    detail: 'piyopiyo!piyopiyopiyo!piyopiyopiyopiyopiyo!pipipipipipiiiiiiii!!!piyopiyopiyooooooooo!!!!!!!!\n二度と日本語がしゃべれなくなるぞ',
  },
];

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
    this.state = {
      sampleList,
    };
    this.AddNewMemoItem = this.AddNewMemoItem.bind(this);
  }

  AddNewMemoItem({ title, detail }) {
    this.setState({
      sampleList: [...this.state.sampleList, { title, detail }],
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Tab screenProps={{
        navigation,
        memo: this.state.sampleList,
        addNewMemoItem: this.AddNewMemoItem}}
      />
    );
  }
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
