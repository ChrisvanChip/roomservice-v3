import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { router } from 'expo-router';
import { post, get, isAxiosError } from '../utils/api';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { AxiosError } from "axios";

function Untitled() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });


  const [roomPIN, setPIN] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [backgroundColorButton] = useMemo(() => {
    if (loading) return ["rgba(171,174,242,1)"];
    if (error) return ["rgba(228, 92, 86,1)"];
    return [`rgba(86,92,228,1)`];
  }, [error, loading]);

  const onChanged = (text: string) => {
    setPIN(text.replace(/[^0-9]/g, ''))
  }
  const joinRoom = async () => {
    setLoading(true)

    if (error) {
      setPIN('');
      setError('');
      setLoading(false);
      return;
    }

    if (roomPIN.length === 6) {
      try {
        await get('rooms/' + roomPIN)
        router.push('caller/' + roomPIN);
      } catch (reason) {
        if (isAxiosError(reason)) {
          if (reason.response?.status === 404) {
            setError('Room not found');
          } else {
            setError(reason.message);
          }
        } else {
          setError(reason as string);
        }
      }
    } else {
      setError('PIN must be 6 digits');
    }

    setLoading(false);
  }
  const createRoom = async () => {
    setLoading(true)
    try {
      const response = await post('rooms/create', {})
      router.push('server/' + response.data.joinToken);
    } catch (reason) {
      if (isAxiosError(reason)) {
        setError(reason.message);
      } else {
        setError(reason as string);
      }
    }
    setLoading(false);
  }
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Roomservice</Text>
        <View style={styles.rect}>
          <View style={styles.input}>
            {!error && <TextInput id="roomPin" maxLength={6} value={roomPIN} onChangeText={onChanged} keyboardType='numeric' style={styles.roomPin} placeholder="Room PIN"></TextInput>}
            {error && <TextInput onPress={joinRoom} showSoftInputOnFocus={false} style={styles.roomPinError} value={error}></TextInput>}
          </View>
          <TouchableOpacity disabled={loading} onPress={joinRoom} style={[styles.button, { backgroundColor: backgroundColorButton }]}>
            <Text style={styles.joinRoom}>{!error ? 'Join Room' : '<- Retry'}</Text>
          </TouchableOpacity>
        </View>
        {!error &&
          <View style={styles.footerButton}>
            <TouchableOpacity onPress={createRoom} style={styles.button2}>
              <Text style={styles.createRoom}>Create Room</Text>
            </TouchableOpacity>
          </View>
        }
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
  roomPinError: {
    fontFamily: "Inter_700Bold",
    color: "rgba(255,59,48,1)",
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
    fontFamily: "Inter_600SemiBold",
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
