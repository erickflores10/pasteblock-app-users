import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const HomeScreen = (props) => {
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings");
    };

    return(
        <SafeAreaView>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Button onPress={goToSettings} title="Ir a Settings" />
        </SafeAreaView>
    );
}

export default HomeScreen;