import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../funtion/login';
import Register from '../funtion/register';
import Details from '../funtion/details';
import Tabs from "../navigator/TabsNavigator";
import Forgot from "../funtion/ForGotPassWord";
const Stack = createNativeStackNavigator();
export default function Root(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" 
          screenOptions = {{
            headerShown: false
          }}> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name = "Tabs" component={Tabs}/>
        <Stack.Screen name = 'Forgot' component={Forgot}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
