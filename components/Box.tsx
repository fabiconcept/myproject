import { StyleSheet, Text, View, ViewStyle } from "react-native";

export default function Box({children, style}: { children: React.ReactNode, style?: ViewStyle }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "white",
        padding: 20,
        borderWidth: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    }
})
