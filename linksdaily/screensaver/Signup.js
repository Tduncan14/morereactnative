import React,{useState} from 'react';
import {Text,View,StyleSheet,Button, TouchableOpacity} from 'react-native';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import Logo from '../components/auth/CircleLogo';
import axios from 'axios'
import CircleLogo from '../components/auth/CircleLogo';


const Signup = () => {

        const [name,setName] = useState('');
        const [email,setEmail] =useState('');
        const [password,setPassword] = useState('');
        const [loading,setLoading] = useState(true);



      const handleSubmit = async () => {

        setLoading(true)


        if(!name || !email || !password ){

            alert("All fields are required");
            setLoading(false)
            return

        }

 
        try{
            
            // const {data} = await axios.post('http://localhost:8000/api/signup',{name,email,password})
            // console.log('the data has been submitted successfully sign in',data)

            console.log(name,email,password,"data being passed to the backend")
            alert('Sign up successfull')
            setLoading(false)


        }

        catch(err){
            console.log(err);
            setLoading(false)
        }
      }



    return(
        <>

   
      
        <View style={{flex:1, justifyContent:'center'}}>

             <CircleLogo />

            <Text style={styles.paragraph}>
                Sign Up
            </Text>

            <UserInput text="Name" value={name} setValue={setName} autoCapitalize="words" autoCorrect={false}/>
            <UserInput text="Email" value={email} setValue={setEmail} autoCompleteType="email"  keyboardType="email-address"/>
            <UserInput text="Password" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />




               <SubmitButton handleSubmit={handleSubmit} text={"submit"} loading={loading}/>
            <Text>{JSON.stringify({name,email,password},null,4)}</Text>

           

       </View>

</>

    )

}

const styles = StyleSheet.create({

    container:{
        color:'black'

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