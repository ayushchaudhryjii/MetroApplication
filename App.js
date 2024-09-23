import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Color from "./src/common/Color";
import BookQRTicket from "./src/screens/BookQRTicket";
import StorePass from "./src/screens/StorePass";
import TripPass from "./src/screens/TripPass";
import BookTicket from "./src/screens/BookTicket";
import Ticket from "./src/screens/Ticket";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.HEADER_COLOR,  
        },
        headerTintColor: Color.WHITE_COLOR,       
        headerTitleStyle: {
          fontWeight: 'bold',
                    
        },
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen component={SplashScreen} name="SplashScreen" options={{headerShown:false}} />
        <Stack.Screen component={HomeScreen} name="HomeScreen" options={{title:"Mumbai Metro"}}  />
        <Stack.Screen component={BookQRTicket} name="BookQRTicket" options={{title:"Book QR Ticket"}}  />
        <Stack.Screen component={StorePass} name="StorePass" options={{title:"Buy New Value Pass"}}  />
        <Stack.Screen component={TripPass} name="TripPass" options={{title:"Buy New Trip Pass"}}  />
        <Stack.Screen component={BookTicket} name="BookTicket" options={{title:"Book Ticket"}}  />
        <Stack.Screen component={Ticket} name="Ticket" options={{title:"Ticket"}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
