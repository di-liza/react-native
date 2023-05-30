import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Switch, Image } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./style";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Switch disabled={false} thumbColor={"#50647f"} />
      <Text style={styles.title}>Awesome Project 💙</Text>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
        Inter Black
      </Text>
      <Button
        title="Learn More"
        color="#65a7dd"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
        source={{
          uri: "https://i.etsystatic.com/34991870/r/il/fa5226/4837889036/il_fullxfull.4837889036_nurb.jpg",
        }}
        style={{
          width: 200,
          height: 150,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
