import * as React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import uuid from 'uuid';
import moment from 'moment-timezone';

import Memo from '../models/Memo';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputGroup: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY_DARK,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    padding: 16,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.ACCENT,
    paddingHorizontal: 4,
    height: 40,
  },
  multiTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.ACCENT,
    paddingHorizontal: 4,
    marginBottom: 8,
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
      return Alert.alert('Error', 'TITLEは必須です');
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
            <FormLabel labelStyle={[{ color: Colors.PRIMARY_DARK }]}>TITLE</FormLabel>
            <FormInput
              blurOnSubmit
              maxLength={40}
              onChangeText={(title: string) => this.setState({ title })}
              containerStyle={[styles.textInput]}
              inputStyle={[{ width: '100%' }]}
              value={this.state.title}
            />
            <FormLabel labelStyle={[{ color: Colors.PRIMARY_DARK }]}>DETAIL</FormLabel>
            <FormInput
              blurOnSubmit
              multiline
              onChangeText={(detail: string) => this.setState({ detail })}
              containerStyle={[styles.multiTextInput]}
              inputStyle={[{ width: '100%' }]}
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
            containerViewStyle={[{ marginTop: 16 }]}
            rounded
            title="ADD MEMO TO LIST"
            backgroundColor={Colors.ACCENT}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddListScreen;
