import React from "react";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const iconoAlbañileria = require("../drawable/albañil.png");
const iconoGasfiteria = require("../drawable/gasfiteria.png");
const iconoElectricidad = require("../drawable/electricidad.png");
const iconoPintura = require("../drawable/pintura.png");



const HomeScreen = (props) => {

    const handleAlertService = () => {
        Alert.alert("Seleccionaste un servicio");
    }

    const { navigation } = props;
    const goToScreen = (pageName) => {
        navigation.navigate(pageName);
    }

    const toggleMenu = () => {
        navigation.openDrawer();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon 
                    onPress={() => toggleMenu()} 
                    style={styles.paddingIcon} 
                    name="menu" 
                    size={45} 
                    color="#fff" 
                />
                <Text></Text>
            </View>
            <Text style={styles.title}>Servicios</Text>
            <TouchableOpacity 
                style={styles.itemContainer} 
                onPress={() => Alert.alert("Press")}
            >
                <Image 
                    style={styles.iconService} 
                    source={iconoAlbañileria} 
                />
                <Text 
                    style={styles.textService}
                >
                    Albañileria
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.itemContainer} 
                onPress={handleAlertService}
            >
                <Image 
                    style={styles.iconService} 
                    source={iconoGasfiteria} 
                />
                <Text 
                    style={styles.textService}
                >
                    Gasfiteria
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.itemContainer} 
                onPress={handleAlertService}
            >
                <Image 
                    style={styles.iconService} 
                    source={iconoElectricidad} 
                />
                <Text 
                    style={styles.textService}
                >
                    Electricidad
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.itemContainer} 
                onPress={handleAlertService}
            >
                <Image 
                    style={styles.iconService} 
                    source={iconoPintura} 
                />
                <Text 
                    style={styles.textService}
                >
                    Pintura
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e8ec",
        marginHorizontal: 15,
        marginVertical: 10,
        width: "70%",
        height: 100,
        borderRadius: 10,
        shadowColor: "#333",

        shadowOffset: {
            width: 2,
            height: 8
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,

        elevation: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#004aad",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 25,
        marginVertical: 20,
        color: "#fff"
    },
    iconService: {
        width: 90,
        height: 90,
        marginHorizontal: 10
    },
    textService: {
        width: 100,
        color: "#004aad"
    },
    headerContainer: {
        width: "100%",
        height: 70,
        backgroundColor: "#004aad",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    headerText: {
        color: "#fff",
        fontSize: 24,
        paddingEnd: 10
    },
    paddingIcon: {
        padding: 10
    }
});

export default HomeScreen;