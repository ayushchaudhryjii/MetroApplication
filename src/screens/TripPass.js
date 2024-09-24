import { View, Text, Image, TouchableOpacity ,Button, FlatList, Modal, Alert, StyleSheet} from "react-native";
import React, { useState } from "react";
import Color from "../common/Color";

const TripPass = ({ navigation }) => {
  const [isSourceModalVisible, setSourceModalVisible] = useState(false);
  const [isDestinationModalVisible, setDestinationModalVisible] = useState(false);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const locations = ['Versova', 'DN Nagar', 'Azad Nagar', 'Andheri','Western Express','Chakala JB Nagar','Airport Road','Marol Naka','Saki Naka','Asalpha','Jagruti Nagar','Ghatkoper'];
  const handleSelectSource = (item) => {
    setSource(item);
    setSourceModalVisible(false);
  };
  const handleSelectDestination = (item) => {
    setDestination(item);
    setDestinationModalVisible(false);
  };
  return (
    <View style={{ backgroundColor: Color.WHITE_COLOR, flex: 1 }}>
      <View
        style={{
          borderColor: Color.CARD_COLOR,
          margin: 20,
          borderWidth: 0.2,
          height: 280,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: Color.BORDER_COLOR,
            fontSize: 16,
            fontWeight: "700",
            marginLeft: 20,
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          Source
        </Text>
          {/* Source Dropdown */}
      <TouchableOpacity style={styles.inputField} onPress={() => setSourceModalVisible(true)}>
        <Text style={styles.text}>{source ? source : 'Select Source'}</Text>
        
      </TouchableOpacity>
        <Text
          style={{
            color: Color.BORDER_COLOR,
            fontSize: 16,
            fontWeight: "700",
            marginLeft: 20,
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          Destination
        </Text>
        {/* Destination Dropdown */}
      <TouchableOpacity style={styles.inputField} onPress={() => setDestinationModalVisible(true)}>
        <Text style={styles.text}>{destination ? destination : 'Select Destination'}</Text>
        
      </TouchableOpacity>

        {/* Modal for Source Selection */}
        <Modal visible={isSourceModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={locations}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem} onPress={() => handleSelectSource(item)}>
                <Text style={styles.listItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Close" onPress={() => setSourceModalVisible(false)} />
        </View>
      </Modal>

      {/* Modal for Destination Selection */}
      <Modal visible={isDestinationModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={locations}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem} onPress={() => handleSelectDestination(item)}>
                <Text style={styles.listItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Close" onPress={() => setDestinationModalVisible(false)} />
        </View>
      </Modal>
      <View style={{flexDirection:"row",justifyContent:"space-around", margin:20,backgroundColor:"#F5F5F5",height:70,borderRadius:5}}>
        <View>
          <Text style={styles.textedit}>Trips</Text>
          <Text style={styles.textedit1}>30</Text>

        </View>
        <View>
        <Text style={styles.textedit}>Validity</Text>
        <Text style={styles.textedit1}>30 Days</Text>

        </View>
        <View>
        <Text style={styles.textedit}>Fare</Text>
        <Text style={styles.textedit1}>Rs 600</Text>

        </View>
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
        onPress={() => {
          if (!source || !destination) {
            Alert.alert("Please select both source and destination.");
          } else {
            navigation.navigate("Ticket");
          }
        }}
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
    paddingTop:10

  },
  textedit1: {
    fontSize:16,
    fontWeight:"500",
    color:"#545454",
    paddingTop:5

  }
});
