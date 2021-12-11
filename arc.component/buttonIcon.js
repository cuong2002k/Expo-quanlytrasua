import React from 'react';
import {Pressable,View,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icons from './iconVector';
export default function Button({onPress}){
  return(
      <View style = {styles.container}>
        <Pressable
        onPress = {onPress}
        android_ripple = {{
          color: '#444',
        }}
        >
           <Ionicons name="eye" size={30} color="black"/>
        </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({
      container: {
        borderRadius: 90,
        overflow: 'hidden'
      },
})