import React from 'react';
import PropTypes from 'prop-types';
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

function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
      <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
    </View>
  );
}

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailScreen;
