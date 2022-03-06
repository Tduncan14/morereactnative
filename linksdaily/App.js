import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';
import Signup from './screensaver/Signup';
import Signin from './screensaver/SignIn';




export default function App() {

  return (
  
    <>
      {/* <Signup /> */}
      <Signin />
      </>

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
