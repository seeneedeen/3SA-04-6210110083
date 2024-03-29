import React from 'react';
import { NavigationContainer, StackAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/Weatherscreen';
const Stack = createStackNavigator();
export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator>
   <Stack.Screen name="Home" component={ZipCodeScreen} />
   <Stack.Screen name="Weather" component={WeatherScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}