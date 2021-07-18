import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'laoding',
        name: '.....',
        description: '....',
        temp: 0,
        tempmin: 0,
        tempmax: 0,
        speedwind:0,
        icon: '....'
        }) 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        tempmax: json.main.temp_max,
                        tempmin: json.main.temp_min,
                        name: json.name,
                        icon: json.weather[0].icon,
                        speedwind: json.wind.speed
                });
            })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style = {styles.container}>
                <Text >Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
        );
    }

    const styles = StyleSheet.create({
        backdrop: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        },
        container:{
            height:400,
            width:300,
            padding:50,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(50,50,50,0.5)',
        },
       });