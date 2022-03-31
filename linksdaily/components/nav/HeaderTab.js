import React ,{useContext} from 'react';
import {View,TouchableOpacity,SafeAreaView} from 'react-native';
import { AuthContext } from '../../context/auth';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


 export const HeaderTab = () =>{

    const [state,setState] = useContext(AuthContext)



    const signout = async () => {

        setState({token:'', user:null})
        await AsyncStorage.removeItem("@auth");



    }





    return(
        <SafeAreaView>
            <TouchableOpacity onPress={signout}>
                <FontAwesome5Icon name="sign-out-alt" size={25} color="#808080"/>


            </TouchableOpacity>
        </SafeAreaView>

    )


}