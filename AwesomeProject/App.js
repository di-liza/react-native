import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontWeight: 500, fontSize: 30 }}>
        Awesome Project 💙
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
