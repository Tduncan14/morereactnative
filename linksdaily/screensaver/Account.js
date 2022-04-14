import React, {useState,useContext,useEffect} from 'react';
import {Text,View,StyleSheet,Button,ScrollView,Image,TouchableOpacity} from 'react-native';
import CircleLogo from '../components/auth/CircleLogo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import{API} from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import *  as ImagePicker from 'expo-image-picker';


const Account = ({navigation}) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
     //image 
     const [uploadImage,setUploadImage] = useState('');
     const[image,setImage] = useState({url:'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg',
     public_id:""});
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


    const handleUpload = async () => {
        //
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            permissionResult.canAskAgain = true;

            

           

        console.log(permissionResult)

        if(permissionResult.granted === false){
            alert('camera access is required,and you have to manually allow access to camera and media');
          
     
            return
        }
        // if everything is is good..you get image library

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            aspect:[4,3],
            base64:true
        })

    }


 
    return(
        <ScrollView>
        <View style={styles.forView}>
            <CircleLogo>
                {image && image.url ? (
                    <Image source={{ uri: image.url}}  style={{width:200,height:200,marginVertical:20,borderRadius:100}}/>
                ):( <TouchableOpacity onPress={() => handleUpload()}>
                    <FontAwesome5 name="camera" size={45} color="orange"/> 
                    </TouchableOpacity>)}
            </CircleLogo>

            {image && image.url ? (
              <TouchableOpacity onPress={() => handleUpload()} ><FontAwesome5 name="camera" size={20}  color="orange" style={{textAlign:'center', marginTop:5,marginBottom:10}}/></TouchableOpacity>
            ) : <></>}

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