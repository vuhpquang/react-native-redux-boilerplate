/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { CombinedDefaultTheme, CombinedDarkTheme } from 'src/config/theme-config';
import { FullStackNavigator as Navigation } from 'navigation';
import configureStore from 'store';

const { persistor, store } = configureStore();

const nativeBaseTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

function App() {
  // const isDark = useSelector(state => state.themeReducer.isDark);
  const isDark = true;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <Navigation theme={combinedTheme} />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
