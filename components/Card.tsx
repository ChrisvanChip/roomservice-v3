import { View } from "react-native";
export function Card({ children }: { children: React.ReactNode }) {
    return (
        <View
            style={{
                backgroundColor: "white",
                padding: 4,
                borderRadius: 8,
                margin: 16,
            }}
        >
            {children}
        </View>
    );
}