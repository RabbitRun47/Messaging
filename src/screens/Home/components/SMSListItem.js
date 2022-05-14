import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {format, isSameDay, isSameYear} from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const AddressListItem = ({data}) => {
  const date = new Date(data.date);
  const currentDate = new Date();
  let displayDateFormat = 'h:mm aaa';
  if (!isSameDay(currentDate, date)) {
    displayDateFormat = 'do MMM, ' + displayDateFormat;
    if (!isSameYear(currentDate, date)) {
      displayDateFormat = 'y, ' + displayDateFormat;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon size={20} name="user-alt" color={'white'} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.address}>{data.address}</Text>
          <Text style={styles.date}>{format(date, displayDateFormat)}</Text>
        </View>
        <Text style={styles.body} numberOfLines={2}>
          {data.body}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textContainer: {flexGrow: 1},
  header: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  address: {fontSize: 15, fontWeight: '700'},
  date: {fontSize: 12},
  body: {marginBottom: 5, flexGrow: 1, maxWidth: '90%'},
});
