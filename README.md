# 👶🏻 React Native Start Project with Tabbar

This project is totally basic project. It has a tabbar with 4 tabs and every tab can have badge.

![](https://github.com/arthur408/base-react-native-tabbar/blob/master/screenshots/screenshot.png)

## Getting Started

### Installation
`$ git clone https://github.com/arthur408/base-react-native-tabbar.git`

`$ yarn install`

### Link
#### For iOS
`$ cd ios && pod install`

## Usage
#### Changing Tabbar icons and title
The project used SVG files for icons. Those are at [src/assets/svg](https://github.com/arthur408/base-react-native-tabbar/tree/master/src/assets/svg).

```javascript
// Svg Icons

import IconHomeActive     from './home_active.svg';
import IconUtensilActive  from './utensil_active.svg';
import IconFoodActive     from './food_active.svg';
import IconHeartActive    from './heart_active.svg';
import IconCheckoutActive from './checkout_active.svg';
import IconHome           from './home';
import IconUtensil        from './utensil.svg';
import IconFood           from './food.svg';
import IconHeart          from './heart.svg';
import IconCheckout       from './checkout.svg';

export default {
  IconHomeActive,
  IconUtensilActive,
  IconFoodActive,
  IconHeartActive,
  IconCheckoutActive,
  IconHome,
  IconUtensil,
  IconFood,
  IconHeart,
  IconCheckout
};
```
And here is the file defined Tab Navigation with the SVG icons.
```javascript
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
```
