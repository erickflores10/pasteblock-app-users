import React from "react";
import { View, Image, StyleSheet } from "react-native";

const iconHeader = require("../drawable/pb-icon.png");

const HeaderForm = () => {
    return(
        <View style={styles.headerContainer}>
            <Image style={styles.headerIcon} source={iconHeader}/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    headerIcon: {
        width: 100,
        height: 100
    }
});

export default HeaderForm;