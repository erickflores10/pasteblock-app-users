import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import LoadingScreen from "../screens/LoadingScreen";
import ConfirmRegisterScreen from "../screens/ConfirmRegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AlbañileriaScreen from "../screens/AlbañileriaScreen";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {


    return(
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Loading" component={LoadingScreen} />
            <Drawer.Screen name="Confirm" component={ConfirmRegisterScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Albañileria" component={AlbañileriaScreen} />
        </Drawer.Navigator>
    );
}

export default NavigationDrawer;