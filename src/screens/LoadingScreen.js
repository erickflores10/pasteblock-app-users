import React from "react";
import { ActivityIndicator, Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

const icon = require("../drawable/pb-icon.png");

const LoadingScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.icon} source={icon} />
                <Text style={styles.textTitle}>Pasteblock</Text>
                {/* <ActivityIndicator size="small" color="#fff" /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#004aad"
    },
    icon: {
        width: 160,
        height: 160
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        paddingVertical: 15,
        textAlign: "center"
    }
});

export default LoadingScreen;