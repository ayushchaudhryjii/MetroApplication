import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Color from '../common/Color'

const Header = () => {
  return (
   <SafeAreaView >
    <StatusBar backgroundColor={Color.HEADER_COLOR} barStyle={'light-content'} />
    <View style={{height:45,width:45}}>
        <Text>Header</Text>
    </View>


   </SafeAreaView>
  )
}

export default Header