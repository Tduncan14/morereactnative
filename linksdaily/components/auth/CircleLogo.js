import {View,Image,Text, StyleSheet} from 'react-native';
import React from 'react';


const CircleLogo = ({children}) =>{






    return (

        <View style={styles.container}>
         
         <View style={{backgroundColor:'white',height:190,width:190, borderRadius:100,justifyContent:'center',alignItems:'center'}}>
             {children ? (children) :(   <Image style={styles.image} source={require('../../assets/logo3.png')} />)}</View>
        </View>
    )





}


const styles = StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:20

    },

    image:{
        width:150,
        height:140,
        marginVertical:30,
        marginBottom:10
    }


})


export default CircleLogo