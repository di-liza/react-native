import { StyleSheet } from "react-native";

export const stylesReg = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    boxSizing: "border - box",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
    lineHeight: 35,
  },
  button: {
    color: "#fff",
    borderRadius: 100,
    marginBottom: 16,
  },
  input: {
    height: 50,
    width: 343,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
});
