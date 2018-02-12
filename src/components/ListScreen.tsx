import * as React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { List as ListView, ListItem, Header } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import { List } from 'immutable';

import MemoListItem from './MemoListItem';
import Memo from '../models/Memo';
import { goDetail } from '../actions/index';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  no_data_container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  no_data_text: {
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 16,
  }
});

interface ScreenPropsProperties {
  goDetailScreen: (item: Memo) => void;
  memo: List<Memo>;
}

interface ListScreenPropaties {
  screenProps: ScreenPropsProperties;
}

class ListScreen extends React.Component<ListScreenPropaties, any> {
  constructor(props: ListScreenPropaties) {
    super(props);
  }

  render() {
    const { goDetailScreen, memo } = this.props.screenProps;
    const Screen = function (memo: List<Memo>) {
      if (memo.size === 0) {
        return (
          <View style={styles.no_data_container}>
            <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
              <Entypo name='new-message' size={64} color={Colors.PRIMARY} />
              <Entypo name='arrow-right' size={64} color={Colors.PRIMARY} />
            </View>
            <Text style={[styles.no_data_text]}>Let's add a memo</Text>
            <Text style={[styles.no_data_text]}>selecting the right tab!</Text>
          </View>
        )
      } else {
        return (
          <ScrollView>
            <ListView containerStyle={[{ marginBottom: 20 }]}>
              {
                memo.map((memo: Memo, key: number) => (
                  <MemoListItem
                    key={key}
                    item={memo}
                    goDetailScreen={goDetailScreen}
                  />
                ))
              }
            </ListView>
          </ScrollView>
        )
      }
    }

    return (
      Screen(memo)
    );
  }
}

export default ListScreen;
