// Tab Navigator

import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstScreen  from '../screens/first';
import SecondScreen from '../screens/second';
import ThirdScreen  from '../screens/thrid';
import ForthScreen  from '../screens/forth';
import FifthScreen  from '../screens/fifth';

const TabNavigator = createBottomTabNavigator(
  {
    One : FirstScreen,
    Two : SecondScreen,
    Three: ThirdScreen,
    Four: ForthScreen,
    Five: FifthScreen
  }, {

  }
);

export default TabNavigator;