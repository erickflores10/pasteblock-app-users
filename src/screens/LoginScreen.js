import React, { useState } from "react";

import {
     Text, 
     View, 
     Input, 
     Button, 
     TouchableOpacity, 
     TextInput, 
     StyleSheet,
     Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderForm from "../components/HeaderForm";


const LoginScreen = (props) => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (FormData) => {
            console.log("Formulario enviado");
            console.log(FormData);
        }
    });

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }



    return(
        <SafeAreaView style={ styles.containerScreen }>
            <HeaderForm />
            <View style={ styles.loginTitleContainer }>
                <Text style={ styles.loginTitle }>Iniciar Sesion</Text>
            </View>
            <View>
                <View style={ styles.inputCustom }>
                    <Icon 
                        style={ styles.inputIcon }
                        name="user" size={20} 
                        color="#007fff" 
                    />
                    <TextInput 
                        maxLength={32} 
                        placeholder="Correo electronico"
                        autoCapitalize="none"
                        value={ formik.values.email }
                        onChangeText={(text) => formik.setFieldValue("email", text)} 
                    />
                </View>
                <View style={ styles.inputCustom }>
                    <Icon 
                        style={ styles.inputIcon } 
                        name="lock" 
                        size={20} 
                        color="#007fff"
                    />
                    <TextInput 
                        secureTextEntry={true} 
                        maxLength={32} 
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        value={ formik.values.password }
                        onChangeText={(text) => formik.setFieldValue("password", text)} 
                    />
                </View>
                <TouchableOpacity onPress={ formik.handleSubmit, () => goToPage("Home") }>
                    <View style={ styles.inputSubmit }>
                        <Text style={ styles.inputSubmitText }>Continuar</Text>
                    </View>
                </TouchableOpacity>
                <Text style={ styles.error }>{ formik.errors.email }</Text>
                <Text style={ styles.error }>{ formik.errors.password }</Text>
                <Text onPress={() => goToPage("Register")} style={ styles.inputRegister }>¿No tienes cuenta? Registrate</Text>
            </View>
        </SafeAreaView>
    );
}

const validationSchema = () => {
    return {
        email: Yup.string().required("El correo es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    };
}

const initialValues = () => {
    return{
        email: "",
        password: ""
    };
}

const styles = StyleSheet.create({
    containerScreen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#004aad"
    },
    loginTitleContainer: {
        paddingVertical: 20
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",  
        textAlign: "center"
    },
    inputContainer: {},
    inputCustom: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f6f9",
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 10
    },
    inputIcon: {
        padding: 12 
    },
    inputSubmit: {
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
    inputSubmitText: {
        color: "#000"
    },
    inputRegister: {
        color: "#e5e8ec",
        textAlign: "center",
        marginVertical: 30
    },
    error: {
        textAlign: "center",
        color: "#ff4040",
        marginTop: 15
    }

})

export default LoginScreen;