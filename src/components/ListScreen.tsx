import * as React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';

import MemoListItem from './MemoListItem';
import Memo from '../models/Memo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  no_data_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  no_data_text: {
    fontSize: 30,
  }
});

interface ScreenPropsProperties {
  goDetailScreen: (item: Memo) => void;
  memo: Memo[];
}

interface ListScreenPropaties {
  screenProps: ScreenPropsProperties;
}

class ListScreen extends React.Component<ListScreenPropaties, any> {
  constructor(props: ListScreenPropaties) {
    super(props);
    this.screen = this.screen.bind(this);
  }

  screen = () => {
    const { goDetailScreen, memo } = this.props.screenProps;
    if (memo.length === 0) {
      return <Text>No List</Text>
    } else {
      return

    }
  }

  render() {
    const { goDetailScreen, memo } = this.props.screenProps;
    const Screen = function (memo: Memo[]) {
      if (memo.length === 0) {
        return (
          <View style={styles.no_data_container}>
            <Text style={styles.no_data_text}>No data</Text>
          </View>
        )
      } else {
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
        )
      }
    }

    return (
      <View style={[styles.container, { flex: (memo.length === 0) ? 1 : 0 }]}>
        {Screen(memo)}
      </View>
    );
  }
}

export default ListScreen;
