import React from 'react';
import {Text,View,StyleSheet, TextInput} from 'react-native';




const UserInput = ({text,value,setValue,
    autoCapitalize ="none",
    keyboardType ="default",
    secureTextEntry = false}) => {




    return(
        

      <View style={{marginHorizontal:24}}>
          <Text style={styles.paragraph}>{text}</Text>


          <TextInput autoCorrect={false} 
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.TextInputs} value={value}
          onChangeText={(text)=> setValue(text)}
          
          />

      </View>




   

  

    )

}

const styles = StyleSheet.create({


    paragraph:{
       
        fontSize:18,
        color:'black'
        
    },

    TextInputs:{
        borderBottomWidth:0.9,
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
  



export default UserInput