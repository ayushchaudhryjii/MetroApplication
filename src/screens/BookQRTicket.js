import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../common/Color";

const BookQRTicket = ({navigation}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Image
        source={require("../images/Page2.png")}
        style={{ height:100, width: "100%",marginTop:20}} resizeMode='contain'
      />
      <TouchableOpacity
        style={{
          backgroundColor: Color.HEADER_COLOR,
          position: "absolute",
          bottom: 80,
          height: 50,
          width:"80%",
          marginHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("BookTicket")}
      >
        <Text style={{color:Color.WHITE_COLOR,fontSize:18,fontWeight:"600"}}>Book Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookQRTicket;
