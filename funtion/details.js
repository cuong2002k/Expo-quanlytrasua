import React, { useState } from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import  Slider  from "../FlastList/FlastlistDetail/RenderSlider";
import Checkk from '../arc.component/ToppingComponent';
export default function Details(){
  return(
      <SafeAreaView style = {Styles.container}>
          <View style = {{paddingVertical: 30}}>
            <Slider/>
          </View>
          <ScrollView>
          <Text style= {Styles.TextTS}>Trà Sữa chân châu đường đen</Text>
          <Text style = {Styles.fontsizeandTopping}>Size</Text>
          <View style = {{paddingLeft:21,paddingBottom:20}}>
              <View style = {Styles.ViewTopping}>
                  <Checkk title = {'X'}/>
                  <Checkk title = {'XL'}/>
                  <Checkk title = {'XXL'}/>
              </View>
          </View>  
          <Text style = {Styles.fontsizeandTopping}>Topping</Text>
          <View style = {{paddingLeft:21}}>
              <View style = {Styles.ViewTopping}>
                  <Checkk title = {'Chân châu'} type={'đ5000'}  />
                  <Checkk title = {'Thạch'} type={'đ5000'}  />
                  <Checkk title = {'Pudding'} type={'đ5000'} />
              </View>
          </View>  
          </ScrollView>
         
          <View style = {{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                <View style = {Styles.view}>
                <View style = {{flexDirection: 'row', paddingLeft: 10,}}>
                  <MaterialCommunityIcons name="shopping-outline" size={24} color="#fff" style = {{paddingTop:10,}}/>
                  <View style={{flexDirection:'column',paddingLeft: 10,paddingTop:5}}>
                  <Text style = {{fontSize:10,color:'#fff'}}> tổng hóa đơn</Text>
                  <Text style={{color:'#fff'}}><Text style={{color:'#fff',fontSize:10}}>đ</Text>{30000}</Text>
                  </View>
                </View>
                  <View style = {{alignItems: 'flex-end',position: 'absolute',right: 0,}}>
                    <TouchableOpacity style = {Styles.button}>
                          <Text style = {{fontSize: 14,color:'#fff',fontWeight: 'bold'}}>Thêm</Text>
                    </TouchableOpacity>
                  </View>  
                </View>
          </View>
          
      </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view :{
      height: 50,
      width: '70%',
      backgroundColor: '#5E454B',
      position: 'absolute',
      bottom: 20,
      borderRadius: 7,
      
  },
  button: {
    backgroundColor: '#F7D59C',
    height: 50,
    width: '250%',
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7
  },
  TextTS: {
    paddingLeft: 22,
    fontSize: 20,
    fontWeight: 'bold'
  },
  fontsizeandTopping: {
    fontSize: 15,
    paddingLeft: 33
  },
  ViewTopping: {
    width:'90%',
    height:100,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
  },
})