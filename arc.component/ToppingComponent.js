import React,{useState} from "react";
import { View,CheckBox,Text,StyleSheet } from "react-native";

export default function Iteam({title,type}){
    const [value,onChangeValue] = useState(false);
    return(
        <View style = {styles.Container}> 
            <View style = {{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                
                <Text style = {styles.text}>{title}</Text>

                <Text>{type}</Text>
            </View>
            <View>
                <CheckBox
                    value = {value}
                    onValueChange = {onChangeValue}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        flexDirection:'row',
    },
    text: {
        fontSize: 15,
        paddingLeft: 12
    }
});