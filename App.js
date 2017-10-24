import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import Icon from "react-native-vector-icons/Entypo";

// Sample
const sampleList = [
  {
    key: 'hoge',
    title: 'hogeの神秘',
    detail: 'hogeはすごいよ。とってもすごいんだよ。何よりもhogeしてhohohogegegeするのがすごい。やっぱすげぇわhogeは。ほら、そこの君もhogeのすごさを知ってきただろ？'
  },
  {
    key: 'fuga',
    title: 'fugaの宝具',
    detail: 'fugaの宝具はfuga神によって5000兆年もの間守られ続けてきた神秘の宝である。形状は「fuga」の形をした禍々しい風格を持つ。一度手にしたものはfuga神の呪いによって永遠にふがふが言い続けるであろう'
  },
  {
    key: 'piyo',
    title: '伝説の島piyo島',
    detail: 'piyopiyo!piyopiyopiyo!piyopiyopiyopiyopiyo!pipipipipipiiiiiiii!!!piyopiyopiyooooooooo!!!!!!!!\n二度と日本語がしゃべれなくなるぞ'
  }
];

class ListComponent extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        data={sampleList}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            style={styles.listItem}
            onPress={() => navigate('Detail', item)}
          >
            <Text style={styles.heading}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.container}
      />
    );
  }
}

class DetailComponent extends Component {
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.heading, {marginBottom: 24}]}>{params.title}</Text>
        <Text style={styles.paragraph}>{params.detail}</Text>
      </View>
    );
  }
}

const Stack = StackNavigator({
  Detail: {screen: DetailComponent, navigationOptions: {title: 'Detail'}},
  List: {screen: ListComponent, navigationOptions: {title: 'Home'}}
}, {
  initialRouteName: 'List',
  headerMode: 'none'
});

class MemoListComponent extends Component {
  render() {
    return (
      <Stack screenProps={this.screenProps}/>
    );
  }
}

class AddMemoItemComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>This is AddMemoItemScreen</Text>
      </View>
    );
  }
}

const Tab = TabNavigator({
  List: {
    screen: MemoListComponent,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="list" size={24} color={tintColor}/>
    }
  },
  AddItem: {
    screen: AddMemoItemComponent,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="add-to-list" size={24} color={tintColor}/>
    }
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#ffffff'
    },
    indicatorStyle: {
      backgroundColor: '#1fff1f'
    },
    activeTintColor: '#037aff',
    inactiveTintColor: '#737373',
    showLabel: false,
    showIcon: true,
  },
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      sampleList,
    };
  }

  render() {
    return (
      <Tab screenProps={{sampleList: this.state.sampleList}}/>
    );
  }
}

/* スタイル */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373'
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
});
