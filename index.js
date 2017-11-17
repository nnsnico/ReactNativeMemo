import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithNavigationState from './src/containers/App';
import AppReducer from './src/reducers';

const store = createStore(AppReducer);

const index = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent('ReactNativeMemo', () => index);
