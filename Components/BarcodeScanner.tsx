import React, { useState, useRef } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BarcodeScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);
  
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = async (scannedData: BarcodeScanningResult) => {
    if (!scanned) {
      setScanned(true);
      console.log(`Scanned barcode: ${scannedData.data}`);
      
      // Take picture immediately after scanning
      if (cameraRef.current) {
        try {
          const photo = await cameraRef.current.takePictureAsync();
          setCapturedImage(photo.uri);
          console.log('Photo taken: ', photo.uri);
        } catch (error) {
          console.log("Failed to take picture: ", error);
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera} 
        facing={'back'}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"] 
        }} 
        onBarcodeScanned={handleBarCodeScanned}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
});
