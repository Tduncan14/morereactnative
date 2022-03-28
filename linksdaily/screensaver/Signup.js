import React,{useState} from 'react';
import {Text,View,StyleSheet,Button, TouchableOpacity,ScrollView, KeyboardAvoidingView,} from 'react-native';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import Logo from '../components/auth/CircleLogo';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo';
import {API} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { KeyboardAwareScrollView ,enableAutomaticScroll} from 'react-native-keyboard-aware-scroll-view'


const Signup = ({navigation}) => {

        const [name,setName] = useState('');
        const [email,setEmail] =useState('');
        const [password,setPassword] = useState('');
        const [loading,setLoading] = useState(false);

  
        // console.log(navigation,'this is the navi object')

      const handleSubmit = async () => {

        setLoading(true)


        if(!name || !email || !password ){

            alert("All fields are required");
            setLoading(false)
            return

        }

 
        try{
            
            const {data} = await axios.post(`${API}/api/signup`,{name,email,password})
            console.log('the data has been submitted successfully sign in',data)

            console.log(name,email,password,"data being passed to the backend")
            alert('Sign up successfull')
            await AsyncStorage.setItem('@auth',JSON.stringify(data))
            setLoading(false)


        }

        catch(err){
            console.log(err);
            alert(`${data.error}`)
            setLoading(false)
        }
      }



    return(
    
      <KeyboardAvoidingView behavior='height' enableOnAndroid   style= {styles.container}>
        <ScrollView>
      

          <View style={styles.forView}>
        <CircleLogo />

      <Text style={styles.paragraph}>
      Sign Up
      </Text>

     <UserInput text="Name" value={name} setValue={setName} autoCapitalize="words" autoCorrect={false}/>
     <UserInput text="Email" value={email} setValue={setEmail} autoCompleteType="email"  keyboardType="email-address"/>
     <UserInput text="Password" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />



    <SubmitButton handleSubmit={handleSubmit} text={"submit"} loading={loading}/>
         
         <Text style={styles.signIn}> Already Joined?  <Text  style={styles.redText} onPress={()=>navigation.navigate('Signin')}>Sign In</Text></Text>
        </View>
        
        
      </ScrollView>
        </KeyboardAvoidingView>
  
        
      
           

       



    )

}

const styles = StyleSheet.create({

    container:{
        color:'black',
        justifyContent:'center'

    },

    forView:{
        marginVertical:100

    },

    paragraph:{
        textAlign:'center',
        fontSize:29,
        color:'black',
        marginBottom:39
        
    },

    TextInputs:{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor:'#8E93a1',
        marginBottom:30
    },

    Text:{
        textAlign:'center',
        fontWeight:"400",
        fontSize:24,
    },


    signIn:{
       
     textAlign:'center',
     fontSize:13
    },

    redText:{
       color:'#ff2222',
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