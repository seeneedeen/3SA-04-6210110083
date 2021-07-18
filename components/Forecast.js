import React from "react"
import { View ,Text, StyleSheet, Image } from "react-native";

export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/'+props.icon+'.png'
    return (
        <View style = {styles.textView}>
        <Text>{props.name}</Text>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <Image source = {{url: image}} style = {{width:100,height:100}} />
        <Text>temp {props.temp} °C</Text>
        <Text>tempmax {props.tempmax} °C</Text>
        <Text>tempmin {props.tempmin} °C</Text>
        <Text>SpeedWind {props.speedwind} m/s</Text>
        </View>
    );
   }
 const styles = StyleSheet.create({
     textView : {
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         color:'white',
     },
     container:{
        height:300,
        width:300,
        padding:50,
        justifyContent:'center',
        alignItems:'center',
    },
 })