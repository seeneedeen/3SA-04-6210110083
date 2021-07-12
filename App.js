import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
export default function App() {
 return (
  <View style={styless.container}>
  <Weather zipCode="90110"/>
  <StatusBar style="auto" />
  </View>
 );
}
const styless = StyleSheet.create({
 container: {
    paddingTop: 25
 },
});