import React from 'react';
import {Text,View,StyleSheet} from 'react-native';




const Signup = () => {




    return(

        <View style={{flex:1, justifyContent:'center'}}>

            <Text style={styles.paragraph}>
                Sign up</Text>


        </View>

    )

}

const styles = StyleSheet.create({

    container:{

    },

    paragraph:{
        textAlign:'center',
        fontSize:29,
        color:'black'
        
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