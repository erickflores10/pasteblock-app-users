import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>ProfileScreen</Text>
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

export default ProfileScreen;