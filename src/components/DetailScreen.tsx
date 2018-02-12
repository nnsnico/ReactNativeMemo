import * as React from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment-timezone';

import Memo from '../models/Memo';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  input: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#0e0d0d',
    // borderColor: Colors.ACCENT,
    // borderBottomWidth: 1,
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
    borderColor: Colors.ACCENT,
  },
  createTime: {
    fontSize: 16,
    color: '#737373',
    marginTop: 8,
  }
});

interface ScreenPropsProperties {
  saveEditMemoItem: (item: Memo) => void;
  removeMemoItem: (item: Memo) => void;
}

interface DetailScreenPropaties {
  navigation: any;
  screenProps: ScreenPropsProperties;
}

interface DetailScreenState {
  title: string,
  detail: string,
}

class DetailScreen extends React.Component<DetailScreenPropaties, DetailScreenState>{
  static navigationOptions = ({ navigation, screenProps }: any) => ({
    title: 'Detail',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.PRIMARY_DARK,
    },
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Entypo
            name="trash"
            size={24}
            color={Colors.ACCENT}
            onPress={() => navigation.state.params.handleRemove(screenProps.removeMemoItem, navigation.state.params)}
            style={{ padding: (Platform.OS === 'android') ? 16 : 8 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          {
            (navigation.state.params.editable) ?
              (
                <Entypo
                  name="check"
                  size={24}
                  color={Colors.ACCENT}
                  onPress={() => navigation.state.params.handleSave(screenProps.saveEditMemoItem, navigation, navigation.state.params)}
                  style={{ padding: (Platform.OS === 'android') ? 16 : 8 }} />
              ) : (
                <Entypo
                  name="edit"
                  size={24}
                  color={Colors.ACCENT}
                  onPress={() => navigation.state.params.handleEdit(navigation)}
                  style={{ padding: (Platform.OS === 'android') ? 16 : 8 }} />
              )}
        </TouchableOpacity>
      </View>
    ),
  });

  constructor(props: DetailScreenPropaties) {
    super(props);
    const memo: Memo = this.props.navigation.state.params;
    this.state = {
      title: memo.title,
      detail: memo.detail,
    };
  }

  handleRemove(removeMemoItem: any, memo: Memo) {
    Alert.alert(
      '削除',
      'このメモを削除しますか？',
      [
        { text: 'キャンセル' },
        { text: 'OK', onPress: () => removeMemoItem(memo) },
      ],
    )
  }

  handleEdit(navigation: any) {
    const prevMemo = navigation.state.params;
    navigation.setParams({ editable: true, prevMemo })
  }

  handleSave(saveEditMemoItem: any, navigation: any) {
    moment.tz.setDefault("Asia/Tokyo");
    let nowDate = moment().format('YYYY年MM月DD日 A h:mm:ss');

    const memo: Memo = {
      key: navigation.state.params.key,
      title: navigation.state.params.title,
      detail: navigation.state.params.detail,
      createTime: nowDate,
    }
    const { prevMemo } = navigation.state.params;

    // handling when title was `null`
    if (memo.title === '') {
      navigation.setParams({ existsTitle: false })
      return Alert.alert(
        'エラー',
        'TITLEは必須です',
        [
          { text: 'OK' },
        ],
      )
    }

    // handling when title and detail are doesn't change from before 
    if (memo.title === prevMemo.title && memo.detail === prevMemo.detail) {
      navigation.setParams({ editable: false });
      return;
    }

    Alert.alert(
      '保存',
      'メモを保存します',
      [
        { text: 'キャンセル' },
        {
          text: 'OK', onPress: () => {
            saveEditMemoItem(memo);
            navigation.setParams({ editable: false, createTime: memo.createTime })
          }
        },
      ],
    )
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleRemove: this.handleRemove,
      handleEdit: this.handleEdit,
      handleSave: this.handleSave,
      editable: false,
      existsTitle: true,
    });
  }

  render() {
    const { navigation } = this.props;
    const memo = this.props.navigation.state.params;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.input}>
            <FormLabel labelStyle={[{ color: Colors.ACCENT }]}>TITLE</FormLabel>
            <FormInput
              containerStyle={[{
                borderBottomColor: Colors.ACCENT,
                borderBottomWidth: (memo.editable && Platform.OS === 'ios') ? 1 : 0,
              }]}
              inputStyle={[
                styles.heading,
                { width: '100%', },
              ]}
              underlineColorAndroid={(memo.editable) ? Colors.ACCENT : null}
              maxLength={40}
              editable={(memo.editable) ? true : false}
              // onFocus={(memo.existsTitle)}
              onChangeText={(title: string) => navigation.setParams({ title, existsTitle: true })}
              value={memo.title}
            />
          </View>
          <View style={styles.input}>
            <FormLabel labelStyle={[{ color: Colors.ACCENT }]}>DETAIL</FormLabel>
            <FormInput
              containerStyle={[
                {
                  borderBottomColor: Colors.ACCENT,
                  borderBottomWidth: (memo.editable && Platform.OS === 'ios') ? 1 : 0
                }
              ]}
              inputStyle={[
                {
                  fontSize: 16,
                  width: '100%',
                  textAlignVertical: 'top'
                },
              ]}
              underlineColorAndroid={(memo.editable) ? Colors.ACCENT : null}
              editable={(memo.editable) ? true : false}
              multiline
              numberOfLines={4}
              onChangeText={(detail: string) => { navigation.setParams({ detail }); navigation.setParams({ existsTitle: false }) }}
              value={memo.detail}
            />
          </View>
          <Text style={styles.createTime}>LAST UPDATE: {memo.createTime}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DetailScreen;
