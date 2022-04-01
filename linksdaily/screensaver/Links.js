import {Text,View} from 'react-native';;
import React from 'react'
import FooterTabs from '../components/nav/Footer';


export default function Links () {





  return(
      <>
      <View>
          <Text>Link Screen</Text>
      </View>

      <View style={{flex:1, justifyContent:'flex-end'}}>
            <FooterTabs/>
     </View>
      </>

  )



}