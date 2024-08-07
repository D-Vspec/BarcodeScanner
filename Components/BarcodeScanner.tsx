import React, { useState, useRef } from 'react';
import { CameraView , CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BarcodeScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);  
  const [imageTaken, setImageStatus] = useState(true);
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

  const handleBarCodeScanned = (scannedData: BarcodeScanningResult) => {
    setScanned(true); 
    console.log(`Scanned barcode: ${scannedData.data}`);
    setImageStatus(false);
  }

  const handleReadyCamera = async () => {
    if(cameraRef.current){
      try {
        const photo = await cameraRef.current.takePictureAsync(
          skipProcessing = true,
        );
        setCapturedImage(photo.uri);
        console.log('Photo taken : ', photo.uri);
      } catch (error) {
        console.log("Failed to take picture: ", error);
      }
    }
    setImageStatus(true);
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
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        onCameraReady = {imageTaken ? undefined : handleReadyCamera}
      />
      {capturedImage && (
        <Text>Captured Image URI: {capturedImage}</Text>
      )}
      {scanned && (
        <Button title="Scan Again" onPress={() => setScanned(false)} />
      )}
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
