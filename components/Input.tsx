import { View, TextInput, StyleSheet, Text } from "react-native";
import {
    useFonts,
    Inter_500Medium,
} from '@expo-google-fonts/inter';
const Input = () => {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
    });
    if (fontsLoaded) {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Room PIN"
                    keyboardType="numeric"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#E4E4E7",
        fontFamily: 'Inter_500Medium',
        color: "#71717A",
        padding: 10,
        textAlign: "center",
    },
});

export default Input;