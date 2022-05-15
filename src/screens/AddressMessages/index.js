import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {messagesDummyData} from '../../../temp/dummyData';
import {Message} from './components/Message';

export const AddressMessages = ({route}) => {
  const address = route.params.address;
  const messages = messagesDummyData
    .filter(message => message.address === address)
    .sort((messsage1, messsage2) => messsage1.date - messsage2.date);
  return (
    <ScrollView style={styles.container}>
      {messages.map(message => (
        <Message key={message._id} data={message} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
