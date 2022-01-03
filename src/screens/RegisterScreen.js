import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderForm from "../components/HeaderForm";

const RegisterScreen = (props) => {
    //Checkbox validation
    const[check, setCheck] = useState(false);
    let changePress = check ? "checkbox" : "square";

    const handleCheck = () => {
        setCheck(!check);
    }

    const AlertMessage = () => {
        Alert.alert("Terminos y condiciones...");
    }

    const { navigation } = props;
    const toNavigate = (pageName) => {
        navigation.navigate(pageName);
    }

    // //Informacion de la API
    // const[data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("URL_API") // Obtiene info del api a traves del url
    //     .then(resp => resp.json()) // Transforma a JSON
    //     .then(data => ) // Informacion a traer, desestrurando el objeto.
    //     return

    // }, []);

    return(
        <SafeAreaView style={ styles.registerScreen }>
            <HeaderForm />
            <View style={ styles.registerTitleContainer }>
                <Icon onPress={ () => toNavigate("Login") } style={ styles.iconBack } name="chevron-back" size={30} color="#000"/>
                <Text style={ styles.registerTitle }>Registro</Text>
            </View>
            <View>
                <View style={ styles.inputContainer }>
                    <Icon style={ styles.icon } name="person" size={20} color="#007fff" />
                    <TextInput maxLength={32} placeholder="Nombres"/>
                </View>
                <View style={ styles.inputContainer }>
                    <Icon style={ styles.icon } name="person" size={20} color="#007fff" />
                    <TextInput maxLength={32} placeholder="Apellidos"/>
                </View>
                <View style={ styles.inputContainer }>
                    <Icon style={ styles.icon } name="mail" size={20} color="#007fff" />
                    <TextInput maxLength={32} placeholder="Correo electronico"/>
                </View>
                <View style={ styles.inputContainer }>
                    <Icon style={ styles.icon } name="call" size={20} color="#007fff" />
                    <TextInput maxLength={32} placeholder="Celular"/>
                </View>
                <View style={ styles.inputContainer }>
                    <Icon style={ styles.icon } name="home-sharp" size={20} color="#007fff" />
                    <TextInput maxLength={32} placeholder="Dirección"/>
                </View>
                <View style={ styles.checkContainer }>
                    <Icon onPress={ handleCheck } style={styles.iconCheck} name={changePress} size={20} color="#fff" />
                    <Text onPress={ AlertMessage } style={styles.checkText}>Acepto los terminos y condiciones</Text>
                </View>
                <TouchableOpacity>
                    <View style={ styles.btnRegister }>
                        <Text style={ styles.btnText }>Registrar </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    registerScreen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#004aad"
    },
    registerTitleContainer: {
        alignItems: "center",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    registerTitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f6f9",
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 10
    },
    icon: {
        padding: 12
    },
    btnRegister: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 50,
        padding: 12,
        shadowColor: "#000",

        shadowOffset: {
            width: 2,
            height: 8
        },
        shadowOpacity: 1,
        shadowRadius: 1,

        elevation: 3,
    },
    btnText: {
        color: "#000"
    },
    checkContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    },
    checkText: {
        color: "#fff"
    },
    iconCheck: {
        paddingHorizontal: 10
    },
    iconBack: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 4,
        position: "absolute",
        left: 0,
        marginLeft: 50
    }
});

export default RegisterScreen;