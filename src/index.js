// App Container

import { createAppContainer } from 'react-navigation';

import TabNavigator from './navigator/tabNavigator';

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;