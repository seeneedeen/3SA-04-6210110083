import React from "react"
import { View ,Text, StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
    <View>
    <Text>{props.name}</Text>
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text>temp {props.temp} °C</Text>
    <Text>tempmax {props.tempmax} °C</Text>
    <Text>tempmin {props.tempmin} °C</Text>
    </View>
    );
   }
   