import React, {useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import CircleLogo from '../components/auth/CircleLogo';
import UserInput from '../components/auth/UserInput';




const Signin = () => {


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
             // const {data} = await axios.post('http://localhost:8000/api/signin',{email,password})
            // console.log('the data has been submitted successfully sign in',data)

            console.log(email,password,"data being passed to the backend")
            alert('Sign up successfull')
            setLoading(false)
        }


        catch(err){
            console.log(err)
            setLoading(false);


        }





    }






    return(
        <View>
             <Text>Sign In</Text>


             <UserInput text="email" value={email}  autoComplete="email" keyboardType='email-address' setValue={setEmail}  enableAndroid/>
             <UserInput text="password" value={password}  setValue={setPassword} secureTextEntry={true} />
        </View>
    )
}


 const styles = StyleSheet.create({




 })




export default Signin