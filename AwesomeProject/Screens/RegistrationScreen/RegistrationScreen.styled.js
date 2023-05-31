import { StyleSheet } from "react-native";

export const stylesReg = StyleSheet.create({
  container: {
    flex: 1,
    boxSizing: "border - box",
    fontFamily: "Roboto",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    height: 549,
    width: 375,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 263,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: "center",
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
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32,

    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,

    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
  input: {
    height: 50,
    width: 343,

    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    marginBottom: 16,

    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,

    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center,",
  },
});
