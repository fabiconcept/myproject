import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flex: 1, minWidth: 150 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#1ec468", flex: 1, minWidth: 150 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#9a28a2", flex: 1, minWidth: 150 }}>Box 3</Box>
      <Box style={{ backgroundColor: "#31958f", flex: 1, minWidth: 150 }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1e72bf", flex: 1, minWidth: 150 }}>Box 5</Box>
      <Box style={{ backgroundColor: "#931542", flex: 1, minWidth: 150 }}>Box 6</Box>
      <Box style={{ backgroundColor: "#526028", flex: 1, minWidth: 150 }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 5,
    borderColor: "#f00",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1,
    alignContent: "stretch"
  },
})