import * as React from 'react';
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


class ListScreen extends React.Component<any, any> {
  render() {
    const { navigation, memo } = this.props.screenProps;
    console.log(1, memo);
    return (
      <FlatList
        data={memo}
        keyExtractor={(item: any, index: number) => String(index)}
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
}

export default ListScreen;
