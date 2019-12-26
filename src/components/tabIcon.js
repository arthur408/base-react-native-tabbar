// Tab Icon

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

export default class TabIcon extends React.Component {
  render() {
    const { name, color, size, badgeCount } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name={name}
          type='font-awesome'
          size={size}
          color={color}
        />
        {
          badgeCount > 0 &&
            <View style={styles.badge}>
              <Text>{badgeCount}</Text>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeNumber: {
    color: 'white', 
    fontSize: 10, 
    fontWeight: 'bold'
  }
});

TabIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  badgeCount: PropTypes.number
}

TabIcon.defaultProps = {
  name: 'home',
  size: 24,
  color: '#007AFF',
  badgeCount: 0
}