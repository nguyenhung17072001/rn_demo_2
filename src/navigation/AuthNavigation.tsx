import React, {memo} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import Login from '../screens/Login';
import Register from '../screens/Register';



const Stack = createStackNavigator();
const AuthNavigation = memo(() => {
  return (
    <Stack.Navigator>
        
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={"Register"}
          component={Register}
          options={{headerShown: false}}
        />
        
        
    </Stack.Navigator>
    
  );
});

export default AuthNavigation;
