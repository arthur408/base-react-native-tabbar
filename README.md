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
