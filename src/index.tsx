import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppWithNavigationState from './containers/AppContainer';
import AppReducer from './reducers/index';

const store = createStore(AppReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
