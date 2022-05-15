import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const Message = ({data}) => {
  const sent = false;
  return (
    <View style={styles.container(sent)}>
      <Text style={styles.body(sent)}>{data.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: sent => ({alignSelf: sent ? 'flex-end' : 'flex-start'}),
  body: sent => ({
    backgroundColor: 'lightgrey',
    marginVertical: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderTopLeftRadius: sent ? 99999 : 0,
    borderTopRightRadius: 99999,
    borderBottomLeftRadius: 99999,
    borderBottomRightRadius: sent ? 0 : 99999,
  }),
});
