import React from 'react';
import {TouchableOpacity, View, Text, TextInput,StyleSheet} from "react-native";
export default function TextInputRN({ onChangeText, placeHolder,right,secureTextEntry=false}){
  return(
    <View style = {styles.container}>
        
        <TextInput
         
          placeholder = {placeHolder}
          onChangeText = {onChangeText} 
          style = {styles.textInput}
          secureTextEntry = {secureTextEntry}
        />
        {right}
    </View>
  );
}
const styles = StyleSheet.create({
    container : {
        width: '70%',
        height: 51,
        backgroundColor : "#fff",
        elevation: 5,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        height: "100%",
        width: "100%",
        flex: 1,
        fontSize: 15
    },
});