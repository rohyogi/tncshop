import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { store } from './src/store'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/Stack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
}
