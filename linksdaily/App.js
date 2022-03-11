import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import Signup from './screensaver/Signup';
import Signin from './screensaver/SignIn';


 const Stack = createNativeStackNavigator();




export default function App() {

  return (

    <NavigationContainer>
         <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Signin" component={Signin}/>
         </Stack.Navigator>
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
