import { View, Text, Image, TouchableOpacity ,Button, FlatList, Modal, Alert, StyleSheet} from "react-native";
import React, { useState } from "react";
import Color from "../common/Color";

const TripPass = ({ navigation }) => {
  const[price , setPrice]=useState(0);
 
  return (
    <View style={{ backgroundColor: Color.WHITE_COLOR, flex: 1 }}>
      <View
        style={{
          borderColor: Color.CARD_COLOR,
          margin: 20,
          borderWidth: 0.2,
          height: 220,
          borderRadius: 5,
        }}
      >
        <View style={{alignItems:"center",marginTop:20}}>
          <Text style={{fontSize:20,fontWeight:"600",color:"#545454"}}>
          Enter Amount
          </Text>
        </View>
        <View style={{alignItems:"center"}}>
        <View style={{margin:20,borderColor:"#545454",borderWidth:2,height:60,width:200,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.textedit2}>{price}</Text>

        </View>

        </View>
      <View style={{flexDirection:"row",justifyContent:"space-around", margin:0,backgroundColor:Color.WHITE_COLOR,height:70,borderRadius:5}}>
        <TouchableOpacity style={{margin:20,backgroundColor:"#F5F5F5",height:30,width:60,borderRadius:35,justifyContent:"center",alignItems:"center"}} onPress={() => setPrice(price+100)}>
          <Text style={styles.textedit}>100</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{margin:20,backgroundColor:"#F5F5F5",height:30,width:60,borderRadius:35,justifyContent:"center",alignItems:"center"}} onPress={() => setPrice(price+200)}>
          <Text style={styles.textedit}>200</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{margin:20,backgroundColor:"#F5F5F5",height:30,width:60,borderRadius:35,justifyContent:"center",alignItems:"center"}} onPress={() => setPrice(price+300)}>
          <Text style={styles.textedit}>300</Text>

        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Color.HEADER_COLOR,
          position: "absolute",
          bottom: 80,
          height: 50,
          width: "80%",
          marginHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Ticket")}
      >
        <Text
          style={{ color: Color.WHITE_COLOR, fontSize: 18, fontWeight: "600" }}
        >
          Generate QR Ticket
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TripPass;

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    margin:15
  },
  text: {
    fontSize: 16,
    color:"#727171",
    fontWeight:"500"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  tripTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripTypeText: {
    marginLeft: 10,
  },
  countButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 40,
    marginTop:56

  },
  listItem: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 1,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    fontWeight:"600"
  },
  textedit: {
    fontSize:16,
    fontWeight:"500",
    color:"#545454",

  },
  textedit2: {
    fontSize:25,
    fontWeight:"500",
    color:"#545454",

  },
});
