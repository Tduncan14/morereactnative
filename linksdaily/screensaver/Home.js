import React ,{useContext} from'react';
import {Text,View,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import { AuthContext } from '../context/auth';
import FooterTabs from '../components/nav/Footer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





const Home = () => {

    const [state,setState] = useContext(AuthContext);






    return(
        <SafeAreaView style={{flex:1}}>
            <Text style={styles.text}>
              Home
            </Text>
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <FooterTabs/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    text:{
        textAlign:'center'
    }









})


export default Home