import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {rootReducer} from './src/reducer';
import {SCREEN_NAMES, SCREEN_COMPONENTS, SCREEN_OPTIONS} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={rootReducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_NAMES.HOME}
            component={SCREEN_COMPONENTS.HOME}
            options={SCREEN_OPTIONS.HOME}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ADDRESS_MESSAGES}
            component={SCREEN_COMPONENTS.ADDRESS_MESSAGES}
            options={SCREEN_OPTIONS.ADDRESS_MESSAGES}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
