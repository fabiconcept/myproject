import { StyleSheet, Text, View } from "react-native";

export default function MultipleStyle() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.lightGreenBg]}>
                <Text>Light Green Box</Text>
            </View>
            <View style={[styles.box, styles.lightBlueBg, styles.androidShadow]}>
                <Text>Light Blue Box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        padding: 20,
        flexDirection: "row",
        gap: 5
    },
    box: {
        height: 100,
        width: 100,
        padding: 10,
        borderWidth: 2,
    },
    lightGreenBg: {
        backgroundColor: 'lightgreen',
    },
    lightBlueBg: {
        backgroundColor: 'lightblue',
    },
    boxShadow: {
        shadowColor: "#333333",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
    },
    androidShadow: {
        elevation: 10,
        shadowColor: "red"
    }
})