// Додати розмітку форми в компонент
// Додати стилі до компонента

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { stylesReg } from "./RegistrationScreen.styled";

function RegistrationScreen() {
  return (
    <View style={stylesReg.container}>
      <ImageBackground
        source={require("../images/photo-bg.jpg")}
        resizeMode="cover"
        style={stylesReg.image}
      >
        <ScrollView style={stylesReg.scrollView}>
          <Text style={stylesReg.text}>Реєстрація</Text>
          <TextInput defaultValue={"Логін"} style={stylesReg.input} />
          <TextInput
            defaultValue={"Адреса електронної пошти"}
            style={stylesReg.input}
          />
          <TextInput defaultValue={"Пароль"} style={stylesReg.input} />
          <TouchableOpacity>
            <Text style={stylesReg.button}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={stylesReg.link}>Вже є акаунт? Увійти</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;
