import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome";


import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from './src/screens/RegisterScreen';
import ProfileScreen from "./src/screens/ProfileScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
// import NavigationStack from './src/navigation/NavigationStack';
// import NavigationTab from './src/navigation/NavigationTab';
// import NavigationDrawer from "./src/navigation/NavigationDrawer";

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <NavigationStack /> */}
//       {/* <NavigationTab /> */}
//       <NavigationDrawer />
//     </NavigationContainer>
//   );
// }

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

  
const NavigationDrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ HomeScreen }/>
    </Drawer.Navigator>
  );
}

const NavigationTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={ NavigationDrawer }
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={ color } size={ size } />,
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
          tabBarIcon: ({ color, size }) => <Icon name="inbox" color={ color } size={ size } />,
          tabBarBadge: 3,
          tabBarVisible: true
        }}
      />
      <Tab.Screen
        name="Login"
        component={ LoginScreen } 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={ LoginScreen } />
        <Stack.Screen name="Register" component={ RegisterScreen } />
        <Stack.Screen name="Home" component={ NavigationTab } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


