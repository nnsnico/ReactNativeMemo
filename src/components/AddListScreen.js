import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputGroup: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
  label: {
    minWidth: 60,
  },
  textInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 40,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  multiTextInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 9,
    height: 80,
  },
});

class AddListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', detail: '' };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>title</Text>
            <TextInput
              blurOnSubmit
              onChangeText={title => this.setState({ title })}
              style={[styles.textInput, styles.heading]}
              value={this.state.title}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>detail</Text>
            <TextInput
              blurOnSubmit
              multiline
              onChangeText={detail => this.setState({ detail })}
              style={[styles.multiTextInput, styles.paragraph]}
              value={this.state.detail}
            />
          </View>
          <Button title="Add item to list" onPress={() => (console.log('hello~'))} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddListScreen;
