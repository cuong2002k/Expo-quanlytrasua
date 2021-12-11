import React from 'react';
import { View,Text,StyleSheet,Image, FlatList,TouchableOpacity,Dimensions,Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const DATA = [
    {
        id: '1',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
    },
    {
        id: '2',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',

    },
    {
        id: '3',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',

    },
    {
        id: '4',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',

    },
    {
        id: '5',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
    
    },
    {
        id: '6',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
      
    },
    {
        id: '7',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
       
    },
    {
        id: '8',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
 
    },
    {
        id: '9',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
     
    },
    {
        id: '91',
        img: require('../../Image/Rectangle42.png'),
        text: 'Ưu đãi 10% cho các loại trà sữa.',
        title : 'Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...',
        
    },

];
const Item = ({source,text,title})=>(
    
        <View style = {styles.container}>
            <TouchableOpacity 
                style = {styles.styleTouOpacity}
            >
                <Image source = {source}/>
                <View style = {{paddingLeft: 8, alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:10}}>{text}</Text>
                    <Text style = {{fontSize:6}}>{title}</Text>
                </View>  
            </TouchableOpacity>
        </View>    
)
export default function Hot(){
    const uNavigation = useNavigation();
    const OnDetails = () =>{
        uNavigation.navigate('Details');
    }
    const renderItem = ({item}) =>(
            <Item source = {item.img} text = {item.text} title = {item.title}/>
    );
    return(
        <FlatList
            data = {DATA}
            renderItem = {renderItem}
            keyExtractor = {value => value.id}
            pagingEnabled
            horizontal
        />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10
        
    },
    styleTouOpacity : {
        width: 162,
        height: 190,
        elevation: 4,
        backgroundColor:'#fff',
        borderRadius:7,
        
    }
});
