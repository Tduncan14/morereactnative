import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';


export default function App() {

  const names = ["Ryan","Zen","David"]


  return (


    // <WebView style={{}} source={{uri:'https://codecontinue.com/'}} />


  <View style={styles.container}>
      <StatusBar style="auto" />



   {names.map ((name) => (
       
       <Text> Welcome {name}</Text>
      
   ))}


  </View>

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
