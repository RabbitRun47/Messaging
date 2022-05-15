import React from 'react';
import {View, StyleSheet} from 'react-native';

export const HorizontalBar = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'grey',
    opacity: 0.1,
    height: 1,
    width: '100%',
  },
});
