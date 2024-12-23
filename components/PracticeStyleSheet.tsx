import { StyleSheet, View } from "react-native";

export default function PracticeStyleSheet() {
    return (
        <View style={practiceStyleSheetStyles.container}></View>
    )
}

const practiceStyleSheetStyles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: 'white',
        borderRadius: "50%",
        borderWidth: 1,
        marginInline: "auto"
    }
})