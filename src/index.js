// App Container

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstScreen  from './screens/first';
import SecondScreen from './screens/second';
import ThirdScreen  from './screens/thrid';
import ForthScreen  from './screens/forth';
import FifthScreen  from './screens/fifth';

const AppContainer = createAppContainer(
  bottomTabNavigator
);

const bottomTabNavigator = createBottomTabNavigator({
    FirstTab  : FirstScreen,
    SecondTab : SecondScreen,
    ThirdTab  : ThirdScreen,
    ForthTab  : ForthScreen,
    FifthTab  : FifthScreen
  }, {

})

export default AppContainer;