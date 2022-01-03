import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const image = require("../drawable/pb-icon.png");

const ConfirmRegisterScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.centerBox}>
                <Image style={styles.image} source={image}/>
                <Text style={styles.text}>¡Su perfil se ha registrado con exito!</Text>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.btnContainer}>
                        <Text>Volver al inicio</Text>
                    </View>
                </TouchableOpacity>
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
    centerBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 160,
        height: 160
    },
    text: {
        color: "#fff",
        fontSize: 16,
        marginVertical: 10
    },
    btnContainer: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 80,
        marginTop: 230,
        borderRadius: 10
    }
});

export default ConfirmRegisterScreen;
