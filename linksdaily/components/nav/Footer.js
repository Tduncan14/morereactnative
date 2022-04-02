import React,{useState} from 'react';
import { TouchableOpacity,View ,Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation,useRoute } from '@react-navigation/native';
import { Divider } from 'react-native-elements';



export default function FooterTabs ({name}){

    const navigation  = useNavigation();
    const route = useRoute();



    console.log("R0UTE =>",route)

    // 

  
    // const handlePress = () => {

    //     alert("pressed")
    // }


  return (
      <>
      <Divider width={1} />
      <View style={{flexDirection:"row", margin:10,marginHorizontal:30,justifyContent:"space-between"}}>
 
            <Tab name="home" text="Home" handlePress={() => navigation.navigate('Home')} screenName="Home" routeName={route.name}/>
            <Tab name="plus-square" text="Post" handlePress={() => navigation.navigate('Post')} screenName="Post" routeName={route.name}/>
            <Tab name="list-ol" text="Links" handlePress={() => navigation.navigate('Links')} screenName="Links" routeName={route.name}/>
            <Tab name="user" text="Account" handlePress={() => navigation.navigate('Account')} screenName="Account" routeName={route.name}/>

          {/* <TouchableOpacity>
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
          </TouchableOpacity> */}
      </View>
      </>
  )

}




export const Tab = ({name,text,handlePress,routeName,screenName}) => {

    const activeScreenColor = screenName === routeName && 'green';




    return(
    <TouchableOpacity onPress={handlePress}>
    <>
    <FontAwesome5 name={name} size={25} color={activeScreenColor}style={{marginBottom:3,alignSelf:"center"}} />
     <Text>{text}</Text>
    </>
</TouchableOpacity>)

}

