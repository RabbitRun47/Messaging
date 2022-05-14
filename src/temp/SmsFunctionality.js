import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

// request sms permission
const requestSmsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
    ]);
    console.log('here', {granted});
  } catch (err) {
    console.warn(err);
  }
};

export const SmsFunctionality = () => {
  // request sms permission
  useEffect(() => {
    requestSmsPermission();
  }, []);

  // read sms
  useEffect(() => {
    SmsAndroid.list(
      JSON.stringify({box: ''}),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        var arr = JSON.parse(smsList);
        console.log({arr});
      },
    );
  }, []);

  return <React.Fragment />;
};
