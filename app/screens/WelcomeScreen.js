import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Text from "@kaloraat/react-native-text";
import SubmitButton from "../components/SubmitButton";

import CircleLogo from "../components/AppLogo/CircleLogo";
import AppTextInput from "../components/Auth/AppTextInput";

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={styles.background}
      // blurRadius={5}
      // source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text medium style={styles.slogan}>
          Every Farmer Best Friend
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <SubmitButton
          title="Login"
          onPress={() => navigation.navigate("Signin")}
        />
        <SubmitButton
          title="Register"
          color="secoundary"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 10,
    alignItems: "center",
  },

  slogan: {
    top: -70,
  },
});
