import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Home} from './screens/Home';

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};
