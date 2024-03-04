import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/appNavigator';

export default function App() {

  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
