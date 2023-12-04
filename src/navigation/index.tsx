import React, {memo} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../core';
import {navigationRef} from './navigationRef';
import {NavigationContainer} from '@react-navigation/native';

//Screen
import Splash from '../screens/Splash';
import LanguageSelection from '../screens/LanguageSelection';

//navigation
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();
const RootNavigation = memo(() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.Splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={"LanguageSelection"}
          component={LanguageSelection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={"AuthNavigation"}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name={'HomeNavigation'}
          component={HomeNavigation} //HomeNavigation
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default RootNavigation;
