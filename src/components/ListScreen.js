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


function ListScreen({ screenProps }) {
  const { navigation, memo } = screenProps;
  return (
    <FlatList
      data={memo}
      extraData={memo}
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
  screenProps: PropTypes.object.isRequired,
};

export default ListScreen;
