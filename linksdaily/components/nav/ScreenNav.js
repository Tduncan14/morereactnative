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
import { HeaderTab } from './HeaderTab';
import Links from '../../screensaver/Links';
import Account from '../../screensaver/Account';
import Post from '../../screensaver/Post';

 const Stack = createNativeStackNavigator();




export default function ScreenNav() {

    const [state,setState] = useContext(AuthContext);


    const authenticated = state && state.token !== '' && state.user !== null

    console.log('Auth',authenticated)

  return (

    // screenOptions={{headerShown:false}}



         <Stack.Navigator initialRouteName='Signup'> 
             {authenticated ?
             <>
             <Stack.Screen name="Home" component={Home} options={{title:'InfoAgent', headerTitleAlign: 'center',headerRightr:() => <HeaderTab />}}/> 
             <Stack.Screen name="Account" component={Account} options={{headerBackTitle:"Back",headerTitleAlign: 'center'}}/>
             <Stack.Screen name="Links" options={{headerTitleAlign: 'center'}} component={Links} />
             <Stack.Screen name="Post" options={{headerTitleAlign: 'center'}} component={Post} />
             </>:
         <>
    <Stack.Screen name="Signup" options={{headerShown:false}} component={Signup}/>
     <Stack.Screen name="Signin" options={{headerShown:false}} component={Signin}/>
        </>
             
             }
           
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
  