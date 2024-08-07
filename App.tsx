import React from 'react';
import { StyleSheet, View } from 'react-native';
import BarcodeScanner from './Components/BarcodeScanner.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <BarcodeScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
