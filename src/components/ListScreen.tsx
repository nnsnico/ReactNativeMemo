import * as React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import MemoListItem from './MemoListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

interface ListScreenPropaties {
  screenProps: any;
}

class ListScreen extends React.Component<ListScreenPropaties, any> {
  render() {
    const { goDetailScreen, memo } = this.props.screenProps;
    return (
      <FlatList
        data={memo}
        extraData={memo}
        keyExtractor={(item: any, index: number) => String(index)}
        renderItem={({ item }) => (
          <MemoListItem
            item={item}
            goDetailScreen={goDetailScreen}
          />
        )}
        contentContainerStyle={styles.container}
      />
    );
  }
}

export default ListScreen;
