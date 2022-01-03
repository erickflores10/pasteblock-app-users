import React from "react";
import { SafeAreaView, Text, Button, ImageBackground, View, StyleSheet, TouchableOpacity } from "react-native";

const bgImage = require("../images/background-welcome.jpg");

const WelcomeScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerTop}>
                    <Text style={styles.title}>Pasteblock</Text>
                    <Text style={styles.subtitle}>Somos la solución a tu construcción</Text>
                    {/* <Button onPress={() => goToPage("Home")} title="Ir a Home" /> */}
                </View>
                <View style={styles.containerBottom}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => goToPage("Register")}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>RegisterScreen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => goToPage("Login")}>
                        <View style={styles.btnContainerCustom}>
                            <Text style={styles.btnTextCustom}>LoginScreen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => goToPage("Loading")}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>LoadingScreen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => goToPage("Confirm")}>
                        <View style={styles.btnContainerCustom}>
                            <Text style={styles.btnTextCustom}>ConfirmScreen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => goToPage("Home")}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>HomeScreen</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        color: "#333",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center"
    },
    btnContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        shadowColor: "#000",

        shadowOffset: {
            width: 2,
            height: 8
        },
        shadowOpacity: 1,
        shadowRadius: 1,

        elevation: 3,
    },
    btnContainerCustom: {
        backgroundColor: "#007fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
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
        color: "#333"
    },
    btnTextCustom: {
        color: "#fff"
    },
    containerTop: {
        width: "100%",
        // backgroundColor: "#999",
        padding: 40
    },
    containerBottom: {
        width: "100%",
        // backgroundColor: "#ddd",
        padding: 40
    },
    subtitle: {
        textAlign: "center",
        color: "#999"
    }
});

export default WelcomeScreen;