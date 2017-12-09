import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
    color: '#737373',
  },
});

class DetailScreen extends React.Component<any, any>{
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
        <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
      </View>
    );
  }
}

export default DetailScreen;
