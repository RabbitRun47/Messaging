import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {format, isSameDay, isSameYear} from 'date-fns';
export const SMSListItem = ({data}) => {
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
    <View>
      <View style={styles.header}>
        <Text style={styles.address}>{data.address}</Text>
        <Text style={styles.date}>{format(date, displayDateFormat)}</Text>
      </View>
      <Text>{data.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  address: {fontSize: 15, fontWeight: '700'},
  date: {fontSize: 12},
});
