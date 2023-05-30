import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Switch } from "react-native";

import { styles } from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <Switch />
      <Text style={styles.title}>Awesome Project 💙</Text>
      <Button
        title="Learn More"
        color="#65a7dd"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}
