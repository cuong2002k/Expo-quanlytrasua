import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextInputRN from '../arc.component/TextInputRN';
import Buttonicon from '../arc.component/buttonIcon';
import ButtonClick from '../arc.component/buttonClick';
export default function App() {
  const [Username, Set_UserName] = useState('');
  const [Password, Set_Password] = useState('');
  const uNavigation = useNavigation();
  const onRegiste = () =>{
    uNavigation.navigate('Register')
  }
  const onTabs = () =>{
    uNavigation.navigate('Tabs')
  }
  const SetForgot = () =>{
    uNavigation.navigate('Forgot');
  }
  const Handler = () =>{
    Set_UserName(Username);
    Set_Password(Password)
  }
  // hidden password
  const [Yey,HiddenYey] = useState(true);
  const Click = () =>{
    if(Yey==true){
      HiddenYey(false);
    }
    else{
      HiddenYey(true);
    }
  }
  //main
  return (
    <View style={styles.container}>
       <StatusBar hidden={true} barStyle='light-content' />
      <View><Text>E-Mail</Text>
        <TextInputRN
          placeHolder={'yourname@example.com...'}
          onChangeText={Handler}
        />
      </View>
      <View><Text>Password</Text>
        <TextInputRN
          placeHolder={'yourpassword...'}
          onChangeText={Set_Password}
          secureTextEntry={Yey}
          //button icon
          right={<Buttonicon onPress={Click} />}
        />
      </View>
      <View style = {styles.forgotpassword}>
          <TouchableOpacity
            onPress={SetForgot}
          >
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
      </View>
      <ButtonClick
        onPress={onTabs}
        Tytle={'Login'}
      />
      <Text>OR</Text>
      <ButtonClick
        onPress={onRegiste}
        Tytle={'Sign Up'}
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7D59C',
  },
  forgotpassword :{
    alignSelf: 'flex-end',
    paddingRight: 50
  }
});