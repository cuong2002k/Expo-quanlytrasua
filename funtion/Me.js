import React from 'react';
import {View,
        Text,
        StyleSheet,
        SafeAreaView,
        Image,
        ImageBackground,
        StatusBar,
        TextInput,
        Pressable
    } from 'react-native'
export default function  App() {
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar hidden/>
            <ImageBackground source={require('../Image/Imgme.png')} style = {styles.ViewImage}>
                <View>
                    <Image source={require('../Image/tome.png')}/>
                </View>   
                <View>
                     <Text style = {{color: '#fff',fontSize:20}}>JanKer Job Elis</Text>
                </View>
            </ImageBackground>
            <View style = {{paddingVertical: 10}}>
                <Pressable 
                    style = {({pressed})=>[{backgroundColor:pressed ? '#886350' : '#F7D59C'},styles.ButtonClick]}
                >
                    <Text style = {{fontSize: 15}}>Connect The Bank</Text>
                </Pressable>
            </View>
            <View style = {{paddingVertical: 10}}>
                <Pressable 
                    style = {({pressed})=>[{backgroundColor:pressed ? '#886350' : '#F7D59C'},styles.ButtonClick]}
                >
                    <Text style = {{fontSize: 15}}>Connect The Bank</Text>
                </Pressable>
            </View>
            <View style = {{paddingVertical: 10}}>
                <Pressable 
                    style = {({pressed})=>[{backgroundColor:pressed ? '#886350' : '#F7D59C'},styles.ButtonClick]}
                >
                    <Text style = {{fontSize: 15}}>Connect The Bank</Text>
                </Pressable>
            </View>
            <View style = {{paddingVertical: 10}}>
                <Pressable 
                    style = {({pressed})=>[{backgroundColor:pressed ? '#886350' : '#F7D59C'},styles.ButtonClick]}
                >
                    <Text style = {{fontSize: 15}}>Connect The Bank</Text>
                </Pressable>
            </View>
            <View style = {{paddingVertical: 10}}>
                <Pressable 
                    style = {({pressed})=>[{backgroundColor:pressed ? '#886350' : '#F7D59C'},styles.ButtonClick]}
                >
                    <Text style = {{fontSize: 15}}>Connect The Bank</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );   
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        
    },
    ViewImage:{
        height: 222,
        width: 375,
        justifyContent: 'center',
        alignItems:'center', 
        paddingVertical: 10
    },
    ButtonClick:{
        height: 43,
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        top: 10
    }
    
})