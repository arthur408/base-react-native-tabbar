// App

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppContainer from './src';
import store from './src/store';

import constants from './src/const';

class App extends React.Component {

  componentDidMount() {
    Icon.loadFont();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: constants.colors.bg }}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

export default App;