import { View } from "react-native";
export function Card({ children }: { children: React.ReactNode }) {
    return (
        <View
            style={{
                backgroundColor: "white",
                borderRadius: 8,
                margin: 16,
                flexDirection: "row",
            }}
        >
            {children}
        </View>
    );
}