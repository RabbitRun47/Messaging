import React from 'react';
import {FlatList} from 'react-native';
import {addressesDummyData, messagesDummyData} from '../../../temp/dummyData';
import {FirstMessageOfEachAddressListItem} from './components/FirstMessageOfEachAddressListItem';
import {View, StyleSheet} from 'react-native';
import {HorizontalBar} from '../../components/HorizontalBar';
import {SCREEN_NAMES} from '..';

export const Home = ({navigation}) => {
  const firstMessageOfEachAddress = addressesDummyData
    .map(address =>
      messagesDummyData.find(messsage => messsage.address === address),
    )
    .filter(message => !!message)
    .sort((messsage1, messsage2) => messsage2.date - messsage1.date);

  const onClickOfFirstMesssageOfEachAddress = item => {
    navigation.navigate(SCREEN_NAMES.ADDRESS_MESSAGES, {address: item.address});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={firstMessageOfEachAddress}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <FirstMessageOfEachAddressListItem
            data={item}
            onClick={() => {
              onClickOfFirstMesssageOfEachAddress(item);
            }}
          />
        )}
        ItemSeparatorComponent={HorizontalBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
