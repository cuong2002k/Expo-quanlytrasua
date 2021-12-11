import React,{ useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView } from "react-native";
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
const App = () =>{
    const [value,onchangeValue] = useState(30000);
    const [number,onchangeNumber] = useState(0);
    const OnchangeValue = () =>{
        onchangeValue(value-30000 >=30000 ? value - 30000 : 30000);
        onchangeNumber(number - 1 >= 0 ? number - 1 : 0);
    }
    const OnchangeValue1 = () =>{
        onchangeValue(value+30000);
        onchangeNumber(number+1);
    }
    return(
        <View style = {Styles.container}>
            <View style = {Styles.viewdetail}>
                <View style = {Styles.fexImg}>
                    <Image source = {require('../Image/thanhtoandetails.png')} style = {Styles.img}/>
                </View>
                <View style = {{paddingLeft:10}}>
                    <Text style = {{fontSize: 17}}>Trà sữa chân châu</Text>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontSize: 9}}>Size: XL</Text>
                        <View style = {{paddingLeft:30}}>
                            <Text style = {{fontSize: 9}}>asasas</Text>   
                            <Text style = {{fontSize: 9}}>asasas</Text> 
                            <Text style = {{fontSize: 9}}>asasas</Text> 
                        </View>
                    </View>
                </View>

                <View style = {Styles.containerbutton}>
                    <Text>đ {value}</Text>
                    <View style = {{flexDirection:'row'}}>
                        <TouchableOpacity
                            style = {Styles.button}
                            onPress = {OnchangeValue}
                        >
                            <Text>-</Text>
                        </TouchableOpacity>
                        <View style = {Styles.button}>
                            <Text>{number}</Text>
                        </View>
                        <TouchableOpacity
                            style = {Styles.button}
                            onPress = {OnchangeValue1}
                        >
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View> 
        </View>
    );
}
const Styles = StyleSheet.create({
    container: {
        flex : 1,
        width: '90%',
        
    },
    fexImg: {
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft:2
    },
    viewdetail :{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        height: 74,
    },
    img: {
        height: 68,
        width: 85
    },
    button: {
        height:19.7,
        width:19.7,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        alignItems:'center',
        justifyContent:'center'
    },
    containerbutton: {
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: 5
    },
    
});
export default App