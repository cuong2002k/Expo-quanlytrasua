import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import Home from '../funtion/Home';
import Details from '../funtion/details';
import Pay from "../funtion/thanhtoan";
import Notification from "../funtion/Notification";
import Tome from "../funtion/Me"
function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <Home/>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1}}>
      <Notification/>
    </View>
  );
}
function Me() {
  return (
    <View style={{ flex: 1}}>
      <Tome/>
    </View>
  );
}
function Shopping() {
  return (
    <View style={{ flex: 1}}>
      <Pay/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options = {{ 
        headerShown:false ,
        tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        
          <Tab.Screen name="Shopping" component={Shopping} 
      options = {{ 
        headerShown:false,
        tabBarLabel: 'Đơn hàng',
          tabBarIcon: ({ color, size }) => (
           <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        
         }}/>

      <Tab.Screen name="Settings" component={SettingsScreen} 
      options = {{ 
        headerShown:false,
        tabBarLabel: 'Thông Báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        
         }}/>

          <Tab.Screen name="Me" component={Me} 
      options = {{ 
        headerShown:false,
        tabBarLabel: 'Tôi',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        
         }}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
      <MyTabs/>
  );
}