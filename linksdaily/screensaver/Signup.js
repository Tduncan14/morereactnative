import React from 'react';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import UserInput from '../components/auth/UserInput';




const Signup = () => {




    return(
        <>

        <View style={{flex:1, justifyContent:'center'}}>

            <UserInput text="Sign up" />

           

       </View>

</>

    )

}

const styles = StyleSheet.create({

    container:{

    },

    paragraph:{
        textAlign:'center',
        fontSize:29,
        color:'black'
        
    },

    TextInputs:{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor:'#8E93a1',
        marginBottom:30
    }
})


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  



export default Signup