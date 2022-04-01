import { Text,View } from "react-native"
import FooterTabs from "../components/nav/Footer"

export default function Account () {




 return(
     <>
    <View>
        <Text>Account Screen</Text>
    </View>


    <View style={{flex:1, justifyContent:'flex-end'}}>
            <FooterTabs/>
    </View>
    </>
 )

    
}