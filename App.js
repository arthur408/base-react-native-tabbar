// App

import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppContainer from './src';
import store from './src/store';

class App extends React.Component {

  componentDidMount() {
    Icon.loadFont();
  }

  render() {
    return (
      <Provider store={store}>
        <ReduxNetworkProvider>
          <AppContainer />
        </ReduxNetworkProvider>
      </Provider>
    );
  }
}

export default App;