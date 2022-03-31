
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import { AuthProvider } from '../../context/auth';

import ScreenNav from './components/nav/ScreenNav';

 const Stack = createNativeStackNavigator();




export default function RootNavigation() {

  return (

    <NavigationContainer>
      <AuthProvider>
      <ScreenNav/>
         </AuthProvider>
    </NavigationContainer>
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
  
