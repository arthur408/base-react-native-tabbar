// Tab Icon

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

export default class SvgIcon extends React.Component {
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
              <Text style={styles.badgeNumber}>{badgeCount}</Text>
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
    borderRadius: 7,
    width: 14,
    height: 14,
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