import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Login from './Login';

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;

const renderScene = SceneMap({
  login: Login,
  register: SecondRoute,
});

const TabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'login', title: 'Login' },
    { key: 'register', title: 'Register' },
  ];

  return (
    <RNTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TabView;

const styles = StyleSheet.create({});
