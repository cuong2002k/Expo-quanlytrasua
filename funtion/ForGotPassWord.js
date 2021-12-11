import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Pressable} from 'react-native';
import TextInputRN from '../arc.component/TextInputRN';
import { Feather } from '@expo/vector-icons';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
export default function App(){
    const uNavigation = useNavigation();
    const SetuNavigation = () =>{
        uNavigation.navigate('Login')
    }
    return(
        <View style = {styles.container}>
            <StatusBar hidden = {true}/>  
                <View style = {styles.Left}>
                    <Pressable
                        onPress={SetuNavigation}
                    >
                        <Feather name="chevron-left" size={40} color="black" />
                    </Pressable>
                </View> 
            <Text style = {styles.TextForGot}>Please enter your Email</Text>
            <TextInputRN
                placeHolder={'Email'}
            />
            <Pressable
                onPress={null}
                style = {({pressed})=>[{backgroundColor: pressed ? '#F7D59C' : '#FFBB4A'},styles.Button]}
            >
                <Text style = {{fontSize:20}}>Send</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F7D59C'
    },
    TextForGot:{
        fontSize: 20
    },
    Button:{
        height: 50,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,   
    },
    Left:{
        position:'absolute',
        top: 10,
        left: 0,
    }
})