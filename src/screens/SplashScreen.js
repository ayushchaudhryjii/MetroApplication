import { View, Text , Image, SafeAreaView, StatusBar } from 'react-native'
import React, {useEffect}from 'react'
import Style from '../common/Style'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("HomeScreen")

    },1000)
   
    
  
}, [1]);
  return (
    <SafeAreaView style={Style.CONTAINER}>
        <StatusBar barStyle={'light-content'}/>
      <Image source={require('../images/logo1.png')} resizeMode='contain' style={Style.SPLASH_LOGO}/>
    

    </SafeAreaView>
  )
}

export default SplashScreen