// Tab Navigator

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstScreen  from '../screens/first';
import SecondScreen from '../screens/second';
import ThirdScreen  from '../screens/thrid';
import ForthScreen  from '../screens/forth';
import FifthScreen  from '../screens/fifth';
import TabIcon from '../components/tabIcon';

import SVG from '../assets/svg';
import constants from '../const';

const TabNavigator = createBottomTabNavigator(
  {
    One: { 
      screen: FirstScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => focused ? <SVG.IconHomeActive width={22} height={20} /> : <SVG.IconHome width={22} height={20} />
      }
    },
    Two: {
      screen: SecondScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => focused ? <SVG.IconUtensilActive width={18} height={20} /> : <SVG.IconUtensil width={18} height={20} />
      }
    },
    Three: {
      screen: ThirdScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => focused ? <SVG.IconFoodActive width={25} height={17} /> : <SVG.IconFood width={25} height={17} />
      }
    },
    Four: {
      screen: ForthScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => focused ? <SVG.IconHeartActive width={22} height={20} /> : <SVG.IconHeart width={22} height={20} />
      }
    },
    Five: {
      screen: FifthScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => focused ? <SVG.IconCheckoutActive width={21} height={21} /> : <SVG.IconCheckout width={21} height={21} />
      }
    }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({

    }),
    tabBarOptions: {
      activeTintColor: constants.colors.tint,
      inactiveTintColor: constants.colors.grey,
      style: {
        borderTopColor: 'transparent',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
      }
    },
  }
);

export default TabNavigator;