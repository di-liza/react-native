// Додати розмітку форми в компонент
// Додати стилі до компонента

import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, Button, TextInput } from "react-native";
import { stylesReg } from "./RegistrationScreen.styled";
const background = { uri: "../images/photo-bg.jpg" };

function RegistrationScreen() {
  return (
    <View style={stylesReg.container}>
      <ImageBackground
        source={background}
        resizeMode="contain"
        style={stylesReg.image}
      >
        <Text style={stylesReg.text}>Реєстрація</Text>
        <TextInput defaultValue={"Логін"} style={stylesReg.input} />
        <TextInput
          defaultValue={"Адреса електронної пошти"}
          style={stylesReg.input}
        />
        <TextInput defaultValue={"Логін"} style={stylesReg.input} />
        <Button
          onPress={() => alert("Left button pressed")}
          color={"#FF6C00"}
          buttonStyle={stylesReg.button}
          title="Зареєстуватися"
        />
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;
