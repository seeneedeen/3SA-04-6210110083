import React from "react"
import { View ,Text, StyleSheet, Image } from "react-native";

export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/'+props.icon+'.png'
    return (
    <View>
    <Text style = {styles.textView}>{props.name}</Text>
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text>temp {props.temp} °C</Text>
    <Image source = {{url: image}} style = {{width:100,height:100}} />
    <Text>tempmax {props.tempmax} °C</Text>
    <Text>tempmin {props.tempmin} °C</Text>
    </View>
    );
   }
 const styles = StyleSheet.create({
     textView : {
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center'
     }
 })