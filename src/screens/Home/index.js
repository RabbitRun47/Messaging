import React from 'react';
import {FlatList} from 'react-native';
import {ReadSMSData} from '../../data';
import {SMSListItem} from './components/SMSListItem';

export const Home = () => {
  return (
    <FlatList
      data={ReadSMSData}
      keyExtractor={item => item._id}
      renderItem={({item}) => <SMSListItem data={item} />}
    />
  );
};
