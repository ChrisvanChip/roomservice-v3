import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useLocalSearchParams } from "expo-router";

function Untitled() {
    const { id } = useLocalSearchParams();
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Manager: Room {id}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(86,92,228,1)",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Untitled;
