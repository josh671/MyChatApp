import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterLogin/RegisterScreen";
import Login from "../screens/RegisterLogin/Login";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
const Stack = createStackNavigator(); 

const RegisterLoginStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name ="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      );
    
}

export default RegisterLoginStack; 