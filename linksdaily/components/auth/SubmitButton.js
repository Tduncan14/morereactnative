import React from 'react';
import { TouchableOpacity ,StyleSheet ,Text} from 'react-native';



const SubmitButton = ({text}) => {





    return (

        <TouchableOpacity 
        style={{backgroundColor:'#ff9900',
        height:50,
        justifyContent:'center',
        marginBottom:20,
        marginHorizontal:15,
        borderRadius:24}}
      
      >
          <Text style={styles.Text}>{text}</Text>
      </TouchableOpacity>

     

    )





}

const styles =  StyleSheet.create({

    Text:{
        fontSize:24,
        textAlign:'center'
    }
})

export  default SubmitButton