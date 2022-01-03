import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const SettingsScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    
    return(
        <SafeAreaView>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage("Home")} title="Ir a Home" />
        </SafeAreaView>
    );
}

export default SettingsScreen;