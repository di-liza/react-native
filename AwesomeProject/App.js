import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#99ccff",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
