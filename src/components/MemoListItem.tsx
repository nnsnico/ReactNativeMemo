import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';

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
});

interface ListItemPropaties {
  item: any,
  goDetailScreen: any,
}

class MemoListItem extends React.Component<ListItemPropaties, any> {
  constructor(props: ListItemPropaties) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(item: any) {
    const { goDetailScreen } = this.props;
    goDetailScreen(item);
  }

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableOpacity
          key={item.key}
          style={styles.item}
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
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MemoListItem;