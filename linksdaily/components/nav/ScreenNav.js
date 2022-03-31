import { StatusBar } from 'expo-status-bar';
import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import Signup from '../../screensaver/Signup';
import Signin from '../../screensaver/SignIn';
import { AuthProvider } from '../../context/auth';
import Home from '../../screensaver/Home';
import { AuthContext } from '../../context/auth';

 const Stack = createNativeStackNavigator();




export default function ScreenNav() {

    const [state,setState] = useContext(AuthContext);


    const authenticated = state && state.token !== '' && state.user !== null

    console.log('Auth',authenticated)

  return (

         <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name='Home' component={Home}/>
         </Stack.Navigator>

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
  