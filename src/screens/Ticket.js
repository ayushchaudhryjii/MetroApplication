import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, Platform } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import 'react-native-get-random-values';

export default function QRCodeScreen() {
  const [qrValue, setQRValue] = useState(''); // State for QR Code value
  const qrCodeRef = useRef();

  // useEffect to generate QR Code when the screen is loaded
  useEffect(() => {
    const uniqueID = uuidv4(); // Generate a unique UUID
    setQRValue(uniqueID); // Set the QR code value
  }, []);

  // Function to save the QR Code to the gallery
  const saveQRCode = async () => {
    try {
      const { uri } = await qrCodeRef.current.toDataURL();
      const fileUri = FileSystem.documentDirectory + 'qrcode.png';

      // Write the QR code as a PNG file
      await FileSystem.writeAsStringAsync(fileUri, uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Save to media gallery (Android & iOS)
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          const asset = await MediaLibrary.createAssetAsync(fileUri);
          await MediaLibrary.createAlbumAsync('Download', asset, false);
          Alert.alert('Success', 'QR code saved to your gallery!');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save QR code.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:20,fontWeight:"600",marginBottom:20}}>Your QR is :</Text>

      {/* QR Code will be generated automatically when the screen loads */}
      {qrValue ? (
        <QRCode
          value={qrValue}
          size={200}
          getRef={qrCodeRef}
        />
      ) : (
        <Text>Loading QR Code...</Text>
      )}
    </View>
  );
}