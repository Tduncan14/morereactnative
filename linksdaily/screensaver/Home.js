import React ,{useContext} from'react';
import {Text,View,SafeAreaView} from 'react-native';
import { AuthContext } from '../context/auth';
import FooterTabs from '../components/nav/Footer';




const Home = () => {

    const [state,setState] = useContext(AuthContext);






    return(
        <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
            <Text>
              {JSON.stringify(state,null,4
                )}
            </Text>
            <FooterTabs/>
        </SafeAreaView>
    )
}


export default Home