import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { goDetail } from '../actions/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
});

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

function ListScreen({ navigation }) {
  return (
    <FlatList
      data={sampleList}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.key}
          style={styles.item}
          onPress={() => navigation.dispatch(goDetail(item))}
        >
          <Text style={styles.heading}>{item.title}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

ListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ListScreen;
