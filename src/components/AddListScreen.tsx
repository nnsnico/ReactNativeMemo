import * as React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  Alert,
} from 'react-native';
import uuid from 'uuid';
import moment from 'moment-timezone';

import Memo from '../models/Memo';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
    backgroundColor: '#fff',
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
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 9,
    height: 80,
  },
  buttonStyle: {
    alignSelf: 'stretch',
  },
});

interface ScreenPropsPropaties {
  addNewMemoItem?: (memo: Memo) => void;
}

interface AddListScreenPropaties {
  screenProps?: ScreenPropsPropaties;
  navigation?: any;
}

interface AddListScreenState {
  title?: string;
  detail?: string;
}

class AddListScreen extends React.Component<AddListScreenPropaties, AddListScreenState> {
  constructor(props: AddListScreenPropaties) {
    super(props);
    this.state = { title: '', detail: '' };
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(title: string, detail: string) {
    const { addNewMemoItem } = this.props.screenProps;
    const { navigation } = this.props;

    moment.tz.setDefault("Asia/Tokyo");
    let nowDate = moment().format('YYYY年MM月DD日 A h:mm:ss');

    const memo: Memo = {
      key: uuid.v4(),
      title,
      detail,
      createTime: nowDate
    }

    if (!title) {
      return Alert.alert('Error', 'titleは必須です');
    }

    addNewMemoItem(memo);
    this.setState({ title: '', detail: '' });
    return (
      Alert.alert(
        'Success',
        '項目を追加しました',
        [
          { text: 'OK', onPress: () => navigation.navigate('List') },
        ],
      )
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>title</Text>
            <TextInput
              blurOnSubmit
              onChangeText={(title: string) => this.setState({ title })}
              style={[styles.textInput, styles.heading]}
              value={this.state.title}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>detail</Text>
            <TextInput
              blurOnSubmit
              multiline
              onChangeText={(detail: string) => this.setState({ detail })}
              style={[styles.multiTextInput, styles.paragraph]}
              value={this.state.detail}
            />
          </View>
          <Button
            onPress={() =>
              this.handleOnPress(
                this.state.title,
                this.state.detail,
              )
            }
            title="Add item to list"
            color={Colors.ACCENT}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddListScreen;
