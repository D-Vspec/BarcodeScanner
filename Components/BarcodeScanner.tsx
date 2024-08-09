import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import BarcodeScannerOverlay from '../Assets/Icons/BarcodeScannerOverlay.tsx';
import FlashButton from '../Assets/Icons/FlashButton.tsx'

const BarcodeScanner: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const [flash, setFlash] = useState<string>('off');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.permissionText}>Grant camera permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleFlash = () => {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
    console.log(`Flash toggled to ${flash}`);
  };

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
        style={StyleSheet.absoluteFillObject} 
        facing={'back'}
        flash={flash}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"] 
        }} 
        onBarcodeScanned={handleBarCodeScanned}
      />
      <BarcodeScannerOverlay/>
      <FlashButton onToggle={toggleFlash}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionText: {
    color: '#FCF3C5',
    fontSize: 18,
    textAlign: 'center',
  },
  rescanButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#FF7A01',
    padding: 15,
    borderRadius: 10,
  },
  rescanText: {
    color: '#FCF3C5',
    fontSize: 18,
  },
});

export default BarcodeScanner;
