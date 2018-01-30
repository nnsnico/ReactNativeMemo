import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';

import Memo from '../models/Memo'
import { goDetail } from '../actions/index';

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
  key: number,
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
    const { key, item } = this.props;
    return (
      <ListItem
        key={key}
        title={item.title}
        subtitle={item.detail}
        rightTitle={item.createTime}
        subtitleNumberOfLines={3}
        onPress={() => this.handleOnPress(item)}
      />
    )
  }
}

export default MemoListItem;