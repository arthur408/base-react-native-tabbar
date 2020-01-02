// Tab Navigator

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstScreen  from '../screens/first';
import SecondScreen from '../screens/second';
import ThirdScreen  from '../screens/thrid';
import ForthScreen  from '../screens/forth';
import FifthScreen  from '../screens/fifth';
import TabIcon from '../components/tabIcon';

import constants from '../const';

const TabNavigator = createBottomTabNavigator(
  {
    One: { 
      screen: FirstScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <TabIcon name='home' color={tintColor} />
      }
    },
    Two: {
      screen: SecondScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <TabIcon name='bell' color={tintColor} badgeCount={3} />
      }
    },
    Three: {
      screen: ThirdScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <TabIcon name='heart' color={tintColor} />
      }
    },
    Four: {
      screen: ForthScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <TabIcon name='star' color={tintColor} />
      }
    },
    Five: {
      screen: FifthScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <TabIcon name='shopping-cart' color={tintColor} />
      }
    }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({

    }),
    tabBarOptions: {
      activeTintColor: 'red', //constants.colors.tint,
      inactiveTintColor: 'gray',
      style: {
        borderTopColor: 'transparent',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
      }
    },
  }
);

export default TabNavigator;