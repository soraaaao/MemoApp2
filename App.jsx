import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello isBang>World</Hello>
      <Hello style={{ fontSize: 16 }}>Small World</Hello>
      <Text>llllllll</Text>
      <Text>yeah</Text>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
