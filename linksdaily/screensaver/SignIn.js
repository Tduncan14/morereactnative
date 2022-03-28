import React, {useState} from 'react';
import {Text,View,StyleSheet,Button,ScrollView} from 'react-native';
import CircleLogo from '../components/auth/CircleLogo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import{API} from '../config'



const Signin = ({navigation}) => {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    
     

    const handleSubmit = async () => {

        setLoading(true)


        if(!email || !password) {

            alert("All fields are required");
            setLoading(false)
            return
        }

        try {
             const {data} = await axios.post(`${API}/api/signin`,{email,password})
            console.log('the data has been submitted successfully sign in',data)

            console.log(email,password,"data being passed to the backend")
            if(data.error){
                //
                alert(`password or email doesn't match`)
                setLoading(false)
            }
           else  {
              alert(`sign in successful`)
              setLoading(false)
            }
            
        }


        catch(err){
            console.log(err)
            alert('User is not found')
            setLoading(false);


        }





    }






    return(
        <ScrollView>
        <View style={styles.forView}>
            <CircleLogo />

             <Text style={styles.Text}>Sign In</Text>


             <UserInput style={styles.textInputs} text="email" value={email}  autoComplete="email" keyboardType='email-address' setValue={setEmail}  enableAndroid/>
             <UserInput style={styles.textInputs} text="password" value={password}  setValue={setPassword} secureTextEntry={true} />


             <SubmitButton handleSubmit={handleSubmit} text="sign in" />

             <Text style={styles.signUp}> Don't have account? <Text style={styles.colorText} onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>


             <Text style={styles.forgotPassword}> 
                 Forgot Password
             </Text>
        </View>

        </ScrollView>
    )
}


 const styles = StyleSheet.create({

      container:{
          alignItems:'center',
          justifyContent:'center',
      },

      forView:{
          marginVertical:100,
          justifyContent:'center'
      },

      paragraph:{
          textAlign:'center',
          fontSize:29,
          color:'black',
          marginBottom:39
      },

      forgotPassword:{
          fontSize:10,
          textAlign:'center',
          color:'orange',
          marginTop:10

      },

      textInputs:{
          borderBottomWidth:0.5,
          height:48,
          borderBottomColor:'#8E93a1',
          marginBottom:30
      }
      ,

      Text:{
          textAlign:'center',
          fontWeight:"400",
          fontSize:24
      },


      signUp:{
          fontSize:14,
          textAlign:'center',
          marginTop:17

      },


      colorText:{
          color:'green'
      }



 })




export default Signin