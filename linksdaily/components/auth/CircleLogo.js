import {View,Image,Text, StyleSheet} from 'react-native';
import React from 'react';


const CircleLogo = () =>{






    return (

        <View>
           <Image style={styles.image} source={require('../../assets/logo.png')} />
        </View>
    )





}


const styles = StyleSheet.create({

    image:{
        width:150,
        height:140,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:50,
        marginHorizontal:120,
        marginBottom:10
    }


})


export default CircleLogo