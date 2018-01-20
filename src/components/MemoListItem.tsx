import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';

import Memo from '../models/Memo'

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#575c59',
  },
  heading: {
    padding: 8,
    fontSize: 24,
  },
  sentence: {
    padding: 8,
    fontSize: 16,
  },
  date: {
    textAlign: 'right',
    paddingRight: 8,
    paddingBottom: 8,
    fontSize: 16,
  }
});

interface ListItemPropaties {
  item: Memo,
  goDetailScreen: (item: Memo) => void,
}

class MemoListItem extends React.Component<ListItemPropaties, any> {
  constructor(props: ListItemPropaties) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(item: Memo) {
    const { goDetailScreen } = this.props;
    goDetailScreen(item);
  }

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableOpacity
          key={item.key}
          onPress={() => this.handleOnPress(item)}
        >
          <View>
            <Text style={styles.heading}>{item.title}</Text>
            <Text
              style={styles.sentence}
              numberOfLines={3}
            >
              {item.detail}
            </Text>
            <Text style={styles.date}>{item.createTime}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.item} />
      </View>
    )
  }
}

export default MemoListItem;