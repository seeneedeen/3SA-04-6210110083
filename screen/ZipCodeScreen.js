import React from "react"
import { FlatList, ImageBackground, Text, TouchableHighlight, View } from "react-native"
import { useNavigation } from "@react-navigation/core"
import {StyleSheet}  from 'react-native'
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'SakonNakhon', code: '47000' },
    { place: 'Sayaboury', code: '55000' },
    { place: 'NakhonSawan', code: '62000' },
    { place: 'SiSaKet', code: '35000' },
    { place: 'ChiangMai', code: '58000' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress= {() => {navigation.navigate('Weather', {zipCode: code})}} >
    <View style={styles.zipItem}>
    <Text>{place}</Text>
    <Text>{code}</Text>
    </View>
    </TouchableHighlight>
    )
   const _keyExtractor = item => item.code
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <ImageBackground source={require('../bg1.jpg')} style={styles.backdrop}>
    <FlatList
    data={availableZipItems}
    keyExtractor={_keyExtractor}
    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
    />
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    zipItem: {
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center'
    },
    zipPlace: {
    flex:1,
    },
    zipCode: {
    flex:1,
    },
    backdrop: {
     width: '100%',
    height: '100%'
    },
   });
