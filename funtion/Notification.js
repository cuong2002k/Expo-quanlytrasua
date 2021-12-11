import React,{ useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView,FlatList } from "react-native";
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { version } from "react/cjs/react.production.min";
const Data = [
    {
        id: '1',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '111',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '11',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '12323',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '1232223',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '1232222223',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
    {
        id: '1212121212323',
        Name: require('../Image/thanhtoandetails.png'),
        Name2: 'Trà sữa chân châu đường đen ',
        Name3: 'Khuyến mãi 30%',
        Name4: 'Số lượng có hạn',
    },
];
const Item = ({source,Name2,Name3,Name4}) =>(
    <View style = {Styles.ViewNofi}>
        <Image source={source} style = {Styles.Img}/>
        <View style = {Styles.View1}>
            <Text>{Name2}</Text>
            <Text>{Name3}</Text>
            <Text>{Name4}</Text>
        </View>
    </View>
)
export default function Notifition() {
    const RenderItem = ({item}) =>(
        <View style = {{paddingVertical: 10}}>
            <Item source = {item.Name} Name2={item.Name2} Name3={item.Name3} Name4={item.Name4}/>
        </View>
    )
  return(
    <View style = {Styles.container}>
        <FlatList
            data = {Data}
            keyExtractor={value => value.id}
            renderItem={RenderItem}
        />
    </View>

  );
}
const Styles = StyleSheet.create({
    container: {
        top: 30,
        alignItems:'center',
        justifyContent:'center', 
    },
    ViewNofi:{
        height: 75,
        width: 300,
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    Img:{
        left: 4
    },
    View1:{
        alignSelf:'flex-start',
        right: 10,
        flexDirection: 'column',
        top: 5
    }
    
});