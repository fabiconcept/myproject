import Greet from "@/components/Greet";
import MultipleStyle from "@/components/MultipleStyle";
import PracticeStyleSheet from "@/components/PracticeStyleSheet";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, View, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
const logoImage = require("@/assets/images/icon.png")


export default function HomeScreen() {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={{ backgroundColor: "#f00", flex: 1, padding: 60, gap: 10 }}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        hidden={toggle}
      />

      <Button 
        title="Alert 01"
        onPress={()=>Alert.alert("Hello World")}
      />
      <Button 
        title="Alert 02"
        onPress={()=>Alert.alert("Hello World", "The works super fine!!")}
      />
      <Button 
        title="Alert 03"
        onPress={()=>Alert.alert("Hello World", "The works super fine!!", [
          {
            isPreferred: true,
            text: "Agree",
            onPress: () => console.log("OK Pressed"),
          },
          {
            text: "Objection",
            onPress: () => console.log("Cancel Pressed"),
          },
          {
            text: "Objection",
            onPress: () => console.log("Cancel Pressed"),
          },
        ])}
      />
      <Greet name="Bruce Lee" />
      <Greet name="Jackie" />
      <PracticeStyleSheet />
      <MultipleStyle />
    </View>
  );
}