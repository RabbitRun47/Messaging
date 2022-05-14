import React from 'react';
import {FlatList} from 'react-native';
import {addressesDummyData, SMSesDummyData} from '../../../temp/dummyData';
import {AddressListItem} from './components/SMSListItem';
import {View, StyleSheet} from 'react-native';

export const Home = () => {
  const firstSMSOfEachAddress = addressesDummyData
    .map(address => SMSesDummyData.find(sms => sms.address === address))
    .filter(SMS => !!SMS)
    .sort((sms1, sms2) => sms2.date - sms1.date);

  const ItemSeparaor = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={firstSMSOfEachAddress}
        keyExtractor={item => item._id}
        renderItem={({item}) => <AddressListItem data={item} />}
        ItemSeparatorComponent={ItemSeparaor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  separator: {
    backgroundColor: 'grey',
    opacity: 0.1,
    height: 1,
    width: '100%',
    marginVertical: 5,
  },
});
