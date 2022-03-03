import React from 'react';
import {Text,View,StyleSheet, TextInput} from 'react-native';




const UserInput = ({text}) => {




    return(
        

      <View style={{marginHorizontal:24}}>
          <Text style={styles.paragraph}>{text}</Text>


          <TextInput style={styles.TextInputs}/>

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