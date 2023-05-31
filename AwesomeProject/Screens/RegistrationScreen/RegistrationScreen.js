// Додати розмітку форми в компонент
// Додати стилі до компонента

import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { stylesReg } from "./RegistrationScreen.styled";

function RegistrationScreen() {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      style={stylesReg.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={stylesReg.container}>
        <ImageBackground
          source={require("../images/photo-bg.jpg")}
          resizeMode="cover"
          style={[stylesReg.image, { position: "static" }]}
        >
          <View style={stylesReg.scrollView}>
            <View style={stylesReg.imagePlaceholder} />
            <Image
              style={stylesReg.addIcon}
              source={require("../images/add.png")}
            />

            <Text style={stylesReg.text}>Реєстрація</Text>
            <View style={stylesReg.inputsList}>
              <View>
                <TextInput
                  cursorColor={"#FF6C00"}
                  onFocus={() => setIsLoginFocused(true)}
                  onBlur={() => setIsLoginFocused(false)}
                  placeholder={"Логін"}
                  placeholderTextColor={"#BDBDBD"}
                  style={[
                    stylesReg.input,
                    {
                      borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
                      borderWidth: 1,
                    },
                  ]}
                />
              </View>
              <View>
                <TextInput
                  cursorColor={"#FF6C00"}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  placeholder={"Адреса електронної пошти"}
                  placeholderTextColor={"#BDBDBD"}
                  style={[
                    stylesReg.input,
                    {
                      borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                      borderWidth: 1,
                    },
                  ]}
                />
              </View>
              <View>
                <TextInput
                  cursorColor={"#FF6C00"}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  style={[
                    stylesReg.input,
                    {
                      borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                      borderWidth: 1,
                    },
                  ]}
                />
              </View>
            </View>
            <Text style={stylesReg.showPassLink}>Показати</Text>

            <TouchableOpacity>
              <Text style={stylesReg.button}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={stylesReg.link}>Вже є акаунт? Увійти</Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

export default RegistrationScreen;
