/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors
 } from 'react-native/Libraries/NewAppScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import 'react-native-gesture-handler';
 import { createStackNavigator } from '@react-navigation/stack';
 import StackNavigator from './src/screen/StackNavigator';
 import DrawerNavigator from './src/screen/DrawerNavigation';

  const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <DrawerNavigator/>
    );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 