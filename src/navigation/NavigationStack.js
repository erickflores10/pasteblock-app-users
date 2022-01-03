import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const NavigationStack = () => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" />
            <Stack.Screen name="Register" />
            <Stack.Screen name="Home" />
        </Stack.Navigator>
    );
}

export default NavigationStack;
