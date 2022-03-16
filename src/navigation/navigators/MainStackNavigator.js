import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainMenuScreen, MovieListScreen } from 'src/screens';

const MainStack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        // headerTintColor: '#1f2937',
        // headerStyle: {
        //   backgroundColor: '#fafaf9',
        // },
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <MainStack.Screen
        name={'MainMenu'}
        component={MainMenuScreen}
        options={{
          title: 'Main Menu',
        }}
      />
      <MainStack.Screen
        name={'MovieList'}
        component={MovieListScreen}
        options={{
          title: 'Movie List',
        }}
      />
    </MainStack.Navigator>
  );
}
