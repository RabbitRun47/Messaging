import React from 'react';
import {FlatList} from 'react-native';
import {addressesDummyData, SMSesDummyData} from '../../../temp/dummyData';
import {FirstSMSOfEachAddressListItem} from './components/FirstSMSOfEachAddressListItem';
import {View, StyleSheet} from 'react-native';

const ItemSeparaor = () => {
  return <View style={styles.separator} />;
};

export const Home = ({navigation}) => {
  const firstSMSOfEachAddress = addressesDummyData
    .map(address => SMSesDummyData.find(sms => sms.address === address))
    .filter(SMS => !!SMS)
    .sort((sms1, sms2) => sms2.date - sms1.date);

  return (
    <View style={styles.container}>
      <FlatList
        data={firstSMSOfEachAddress}
        keyExtractor={item => item._id}
        renderItem={({item}) => <FirstSMSOfEachAddressListItem data={item} />}
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
