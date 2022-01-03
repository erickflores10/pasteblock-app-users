import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessagesScreen = () => {

    const[message, setMessage] = useState(0);

    return(
        <SafeAreaView style={styles.container}>
            <Text>MessageScreen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default MessagesScreen;