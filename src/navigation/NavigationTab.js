import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";

import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={ HomeScreen }
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="home" color={ color } size={ size } />
                }} 
            />
            <Tab.Screen 
                name="Profile"
                component={ ProfileScreen }
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="user" color={ color } size={ size } />
                }}
            />
            <Tab.Screen 
                name="Messages"
                component={ MessagesScreen }
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="inbox" color={ color } size={ size } />
                }}
            />
        </Tab.Navigator>
    );
}

export default NavigationTab;