import React from "react"
import { View ,Text } from "react-native";

export default function Forecast(props) {
    return (
    <View >
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text>{props.temp}</Text>
    <Text>°C</Text>
    <Text>tempmin {props.tempmin} °C</Text>
    <Text>tempmin {props.tempmin} °C</Text>
    </View>
    )
   }
   