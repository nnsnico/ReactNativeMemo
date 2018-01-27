import * as React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Memo from '../models/Memo';
import Colors from '../Colors';

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

interface ScreenPropsProperties {
  removeMemoItem: (item: Memo) => void;
}

interface DetailScreenPropaties {
  navigation: any;
  screenProps: ScreenPropsProperties;
}

class DetailScreen extends React.Component<DetailScreenPropaties, any>{
  static navigationOptions = ({ navigation, screenProps }: any) => ({
    title: 'Detail',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.PRIMARY_DARK,
    },
    headerRight: (
      <Entypo
        name="trash"
        size={24}
        color={Colors.ACCENT}
        style={{ paddingRight: (Platform.OS === 'android') ? 16 : 0 }}
        onPress={() => screenProps.removeMemoItem(navigation.state.params)} />
    ),
  });

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
