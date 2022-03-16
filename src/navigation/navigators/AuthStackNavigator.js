import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from 'screens';

const AuthStack = createNativeStackNavigator();

const AuthScreens = {
  AuthScreen: AuthScreen,
};

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        // animation: 'slide_from_right',
      }}>
      {Object.entries({
        ...AuthScreens,
      }).map(([name, component]) => (
        <AuthStack.Screen key={name} name={name} component={component} />
      ))}
    </AuthStack.Navigator>
  );
}
