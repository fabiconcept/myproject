import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#1ec468", }}>Box 2</Box>
      <Box style={{ backgroundColor: "#9a28a2", }}>Box 3</Box>
      <Box style={{ backgroundColor: "#31958f", top: 100, left: 100, position: "absolute" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#1e72bf", }}>Box 5</Box>
      <Box style={{ backgroundColor: "#931542", }}>Box 6</Box>
      <Box style={{ backgroundColor: "#526028", }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 5,
    borderColor: "#f00",
    flex: 1,
  },
})