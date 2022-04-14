import React, {useState,useContext,useEffect} from 'react';
import {Text,View,StyleSheet,Button,ScrollView,Image,TouchableOpacity} from 'react-native';
import CircleLogo from '../components/auth/CircleLogo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import{API} from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Account = ({navigation}) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const[image,setImage] = useState({});
    const [role,setRole] = useState('')
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    
    // context
    const [state,setState] = useContext(AuthContext)
 


     useEffect(() => {
        if(state){
            const {name,email,image,role} = state.user;
            setName(name)
            setEmail(email)
            setRole(role)

        }
     },[state])

     

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

            // save in the context
            setState(data)
            


            //    save response in async storage
            await AsyncStorage.setItem('@auth', JSON.stringify(data));


              alert(`sign in successful`)
              setLoading(false)

              navigation.navigate('Home')
            }
            
        }


        catch(err){
            console.log(err)
            alert('User is not found')
            setLoading(false);


        }





    }


    const handleUpload = () => {}


 
    return(
        <ScrollView>
        <View style={styles.forView}>
            <CircleLogo>
                {image && image.url ? (
                    <Image source={{ uri: image.url}}  style={{width:200,height:200,marginVertical:200}}/>
                ):( <TouchableOpacity onPress={() => handleUpload()}>
                    <FontAwesome5 name="camera" size={45} color="orange"/> 
                    </TouchableOpacity>)}
            </CircleLogo>

             <Text style={styles.Text} >{name}</Text>

             <Text style={styles.Texts} >{email}</Text>

             
             <Text style={styles.Role} >{role}</Text>


             <UserInput style={styles.textInputs} text="password" value={password}  setValue={setPassword} secureTextEntry={true} />


             <SubmitButton handleSubmit={handleSubmit} text="Update Password" />

             
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
          borderBottomColor:'#8E93a3',
          marginBottom:30
      }
      ,

      Text:{
          textAlign:'center',
          fontWeight:"400",
          fontSize:24,
          paddingBottom:10
      },

      Texts:{
  
            textAlign:'center',
            fontWeight:"400",
            fontSize:14,
            paddingBottom:10
    
      },

      Role:{
  
        textAlign:'center',
        fontWeight:"400",
        fontSize:14,
        paddingBottom:50,
        color:'#939799',

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




export default Account