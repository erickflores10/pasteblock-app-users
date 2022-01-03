import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Button, StyleSheet, PermissionsAndroid, ToastAndroid } from "react-native";


const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Acceso a la camara",
                message: "Esta aplicacion necesita los permisos para acceder a la camara",
                buttonPositive: "OK",
                buttonNegative: "Cancel",
                buttonNeutral: "Recordar mas tarde"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Permiso accedido");
        } else {
            console.log("Permiso denegado");
        }
    } catch(err) {
        console.log(err);
    }
}

const AlbañileriaScreen = () => {
    
    // showToast visualiza el mensaje del activity
    const showToast = () => {
        ToastAndroid.show("Toast Android show", ToastAndroid.SHORT);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Albañileria</Text>
            <Button onPress={ requestCameraPermission } title="Acceder a la camara" />
            <Button onPress={ showToast } title="Toast show" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20
    }
});

export default AlbañileriaScreen;