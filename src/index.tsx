import * as React from 'react';
import { Provider } from 'react-redux';
import createMiddlewares from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import AppWithNavigationState from './containers/AppContainer';
import AppReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createMiddlewares();
const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga)

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
