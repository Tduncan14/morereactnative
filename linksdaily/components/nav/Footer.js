import React,{useState} from 'react';
import { TouchableOpacity,View ,Text} from 'react-native';




export default function FooterTabs (){

    // 







  return (
      <View style={{flexDirection:"row", margin:10,marginHorizontal:30,justifyContent:"space-between"}}>
          <TouchableOpacity>
              <>
               <Text>Home</Text>
              </>
          </TouchableOpacity>

          <TouchableOpacity>
              <>
              <Text>Post</Text>
              </>
          </TouchableOpacity>

          <TouchableOpacity>
              <>
              <Text>Links</Text>
              </>
          </TouchableOpacity>

          <TouchableOpacity>
              <>
               <Text>Account</Text>
              </>
          </TouchableOpacity>
      </View>
  )

}