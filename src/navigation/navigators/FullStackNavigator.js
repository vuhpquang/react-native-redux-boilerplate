// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthStackNavigator, MainStackNavigator } from 'navigation';
import { navigationRef } from 'navigation/NavigationService';

const RootStack = createNativeStackNavigator();

function FullStackNavigator({ theme }) {
  const isLoggedInSelector = useSelector(state => state.loginReducer.isLoggedIn);
  const renderScreens = isLoggedIn => {
    return isLoggedIn ? (
      <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  };

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <RootStack.Navigator
        screenOptions={{
          // headerTintColor: '#1f2937',
          // headerStyle: {
          //   backgroundColor: '#fafaf9',
          // },
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        {renderScreens(isLoggedInSelector)}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default FullStackNavigator;
