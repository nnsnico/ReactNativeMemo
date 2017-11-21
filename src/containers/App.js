import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabBarBottom } from 'react-navigation';

import DetailScreen from '../components/DetailScreen';
import ManageMemoTab from '../components/ManageMemoTab';

export const sampleList = [
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

export const AppNavigator = StackNavigator({
  // 詳細画面
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail',
    },
  },
  Tab: {
    screen: ManageMemoTab,
    navigationOptions: {
      title: 'Home',
    },
    tabBarOptions: {
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
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
  },
});

function AppWithNavigationState({ dispatch, nav }) {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
  );
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return ({
    nav: state.nav,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
