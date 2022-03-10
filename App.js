// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackNavigator } from './src/navigators/MainStackNavigator';

const RootStack = createNativeStackNavigator();

function App() {
  function renderScreens() {
    // if (loading) {
    //   return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    // }
    // return user ? (
    //   <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
    // ) : (
    //   <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    // );
    return <RootStack.Screen name="MainStack" component={MainStackNavigator} />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {renderScreens()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
