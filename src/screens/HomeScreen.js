import { View, Text, SafeAreaView , Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import Style from '../common/Style'
import { Data } from '../common/Constant'
import Color from '../common/Color'

const HomeScreen = ({navigation}) => {
    const handleSubmit = (item) => {
        if(item.tag == "tag1"){
            navigation.navigate("BookQRTicket")

        }
        else if(item.tag == "tag2"){
            navigation.navigate("StorePass")
        }
        else{
            navigation.navigate("TripPass")
        }

    }
    const renderItemlist = ({item,index}) => {
        console.log(item,"items");
        return(
            <View>
                <TouchableOpacity  style={{backgroundColor:Color.WHITE_COLOR , padding:8 , margin:5,marginTop:10, elevation:5,marginHorizontal:15,flexDirection:"row",borderColor:Color.CARD_COLOR,borderRadius:3,borderWidth:0.2}}
                onPress={() => handleSubmit(item)}>
                <View style={{width:"30%",justifyContent:"center"}} >
                <Image source={item.img} style={{width:80,height:80}} resizeMode='contain'/>
                </View>
                
                <View style={{width:"58%"}} >
                <Text style={{fontSize:22,color:Color.CARD_COLOR,fontWeight:"700",paddingTop:3}}>{item.title}</Text>
                <Text style={{fontSize:12,color:Color.CARD_COLOR,fontWeight:"600", paddingTop:5}}>{item.desc}</Text>
                </View>
                <View style={{width:"12%",justifyContent:"center"}} >
                <Image source={require("../images/forwardicon.png")} style={{width:22,height:22}} resizeMode='contain'/>

                </View>
                </TouchableOpacity>
               


            </View>
        )

    }
  return (
    <SafeAreaView>
        <Image source={require("../images/banner.png")} resizeMode='cover' style={Style.HOME_BANNER}/>
        <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderItemlist}
        />
    </SafeAreaView>
  )
}

export default HomeScreen