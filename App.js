import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Login from './funtion/login';
import Root from './navigator/index';
import Home from './funtion/Home';
// import Tabs from './navigator/TabsNavigator';
import Details from './funtion/details';
import Register from './funtion/register';
import Bank from "./funtion/thanhtoan.js";
import Pay from "./funtion/thanhtoan.js";
import Tabs from "./navigator/TabsNavigator";
import ForGot from "./funtion/ForGotPassWord";
import Notification from "./funtion/Notification"
import Tome from "./funtion/Me.js"
export default function app(){
    return(
        <Root/>
    );
}
