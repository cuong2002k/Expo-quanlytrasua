import React from "react";
import { View ,Text ,Image, StyleSheet,TouchableOpacity, Touchable } from "react-native";

const Item = ({source,onpress}) =>(
    <View style = {styles.container}>
        <TouchableOpacity
            onPress={onpress}
        >
            <Image source = {source}/>
        </TouchableOpacity>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    }
});
export default Item;