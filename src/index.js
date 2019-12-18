// App Container

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from './navigator/tabNavigator';

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;