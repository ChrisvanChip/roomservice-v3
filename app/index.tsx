import { Text, View } from "react-native";
import { Card } from "../components/Card";
import Input from "../components/Input";

/*
Page design outline:
1. Header title
2. Card with PIN input and "Join Room" button, grey outline
3. "Create Room" button, sticky to bottom with offset from bottom
*/

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#565CE4",
      }}
    >
      <Text style={{
        color: "white", fontSize: 36, fontWeight: "bold"
      }}>Roomservice</Text>
      <Card>
        <Input />
      </Card>
    </View>
  );
}
