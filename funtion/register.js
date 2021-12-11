
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView, KeyboardAvoidingView,SafeAreaView,StatusBar } from 'react-native';
//import { NavigationContainer,navigate } from '@react-navigation/native';
import { AntDesign} from '@expo/vector-icons';
//import Login from '../navigator/index';
import TextInputRN from '../arc.component/TextInputRN';
import ButtonClick from '../arc.component/buttonClick';
import Buttonicon from '../arc.component/buttonIcon';
import { useNavigation } from '@react-navigation/core';
export default function App({ navigation }) {
  const uNavigation = useNavigation();
  const Out =()=>{
    uNavigation.navigate('Login');
  }
  //hidden password
  const [Yey,Hiddenyey] = useState(true);
  const ClickToHidden = () =>{
    if(Yey==true){
      Hiddenyey(false);
    }
    else{
      Hiddenyey(true);
    }
  }
  return (
    <SafeAreaView style={Styles.container}>
        <StatusBar hidden={true} barStyle='light-content' />
      <TouchableOpacity
        onPress={Out}
        style={{ position: 'absolute', top: 30, left: 20}}
      >
         <AntDesign name="arrowleft" size={30} color="black"/>
      </TouchableOpacity>


      <Text style={{ fontSize: 34, fontWeight: 'bold', }}>Create Account</Text>
      <Text>Create a new account</Text>
      <View>
        <Text>E-mail</Text>
          <TextInputRN
              placeHolder = {'E-mail'}
        
              onChangeText = {null}
          />
      </View>
      <View>
        <Text>Phone</Text>
          <TextInputRN
              placeHolder = {'Number'}
             
              onChangeText = {null}
          />
      </View>
      <View>
        <Text>Password</Text>
          <TextInputRN
              placeHolder = {'Password'}
              onChangeText = {null}
              secureTextEntry = {Yey}
              right = {
                <Buttonicon 
                  onPress = {ClickToHidden}
                />
              }
          />
      </View>
      <View>
        <Text>Confirm Password</Text>
          <TextInputRN
              placeHolder = {'Confirm Password'}
              onChangeText = {null}
              secureTextEntry = {Yey}
              right = {
                <Buttonicon 
                    onPress={ClickToHidden}
                />
              }
          />
      </View>
            <ButtonClick
              Tytle = {'Register'}
            />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D59C',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});