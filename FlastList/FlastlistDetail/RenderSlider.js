import React from "react";
import { View,Image, FlatList,StyleSheet ,Dimensions} from "react-native";
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const DATA = [
    {
        id: '1',
        img: require('../../Image/Milktea.png')
    },
    {
        id: '2',
        img: require('../../Image/Milktea.png')
    },
    {
        id: '3',
        img: require('../../Image/Milktea.png')
    },
];
const Item = ({source}) =>(
    <View style = {styles.container}>
        <Image source = {source}  style = {styles.image}/>
    </View>
);
export default function Slide(){
    const renderItem = ({item}) =>(
        <Item source = {item.img}/>
    );
    return(
        <FlatList
            data = {DATA}
            renderItem = {renderItem}
            keyExtractor = {(value) => value.id}
            horizontal
            pagingEnabled
        />
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: width,
        height: height/3,
    }
    
});