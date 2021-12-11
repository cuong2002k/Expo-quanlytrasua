import React,{ useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView,StatusBar} from "react-native";
import ViewDeail from '../arc.component/thanhtoancomponent';
import { AntDesign } from '@expo/vector-icons'; 
export default function App(){
    return(
        <SafeAreaView style = {Styles.Container}>
            <StatusBar hidden = {true}/>
            <View style= {Styles.buttonleft}>
                <TouchableOpacity style = {Styles.button}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text style = {{fontSize: 18,paddingLeft:5}}>Trở về</Text>
                </TouchableOpacity>
            </View>
            <ViewDeail/>
            <ViewDeail/>
            <ViewDeail/>
            <ViewDeail/>
            <ViewDeail/>
            <ViewDeail/>
        </SafeAreaView>
    );
}
const Styles = StyleSheet.create({
    Container: {
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonleft: {
        alignSelf: 'flex-start',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 10
    },
    button: {
        flexDirection: 'row',
        paddingTop:10,
    }
});