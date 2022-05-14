import React from 'react';
import {FlatList} from 'react-native';
import {addressesDummyData, smsDummyData} from '../../temp/dummyData';
import {SMSListItem} from './components/SMSListItem';
import {View, StyleSheet} from 'react-native';

export const Home = () => {
  const sortedReadSMSData = smsDummyData.sort(
    (sms1, sms2) => sms2.date - sms1.date,
  );
  const smsListData = addressesDummyData.map(address =>
    sortedReadSMSData.find(sms => sms.address === address),
  );

  const ItemSeparaor = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={smsListData}
        keyExtractor={item => item._id}
        renderItem={({item}) => <SMSListItem data={item} />}
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
