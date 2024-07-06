import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

function Untitled() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [roomPIN, setPIN] = useState('');
  const onChanged = (text: string) => {
    setPIN(text.replace(/[^0-9]/g, ''))
  }
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Roomservice</Text>
        <View style={styles.rect}>
          <View style={styles.input}>
            <TextInput maxLength={6} value={roomPIN} onChangeText={onChanged} keyboardType='numeric' style={styles.roomPin} placeholder="Room PIN"></TextInput>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.joinRoom}>Join Room</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerButton}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.createRoom}>Create Room</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    fontFamily: "Inter_700Bold",
    color: "rgba(255,255,255,1)",
    marginBottom: 20,
    fontSize: 32
  },
  rect: {
    width: 271,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
  },
  input: {
    width: 253,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(228,228,231,1)",
    borderRadius: 12,
    marginTop: 11,
    marginLeft: 9,
  },
  roomPin: {
    fontFamily: "Inter_700Bold",
    color: "rgba(113,113,122,1)",
    fontSize: 14,
    textAlign: "center",
    flex: 1
  },
  button: {
    width: 253,
    height: 41,
    backgroundColor: "rgba(86,92,228,1)",
    borderRadius: 12,
    marginTop: 12,
    marginLeft: 9,
    marginBottom: 11
  },
  joinRoom: {
    fontFamily: "Inter_400Regular",
    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: 92
  },
  footerButton: {
    position: "absolute",
    bottom: 15,
    width: 271,
    height: 41
  },
  button2: {
    width: 271,
    height: 41,
    backgroundColor: "rgba(244,244,245,1)",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(212,212,216,1)"
  },
  createRoom: {
    fontFamily: "Inter_600SemiBold",
    color: "rgba(0,0,0,1)",
    marginTop: 9,
    marginLeft: 92
  }
});

export default Untitled;
