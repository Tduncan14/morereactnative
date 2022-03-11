import {View,Image,Text, StyleSheet} from 'react-native';
import React from 'react';


const CircleLogo = () =>{






    return (

        <View style={styles.container}>
           <Image style={styles.image} source={require('../../assets/logo3.png')} />
        </View>
    )





}


const styles = StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',

    },

    image:{
        width:150,
        height:140,
        marginVertical:30,
        marginBottom:10
    }


})


export default CircleLogo