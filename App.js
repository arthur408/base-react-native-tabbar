// App

import React from 'react';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppContainer from './src';

class App extends React.Component {

  componentDidMount() {
    Icon.loadFont();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

// const App = () => (
//   // <Provider>
//     <AppContainer />
//   // </Provider>
// );

export default App;