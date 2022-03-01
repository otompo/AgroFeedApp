import React, { useState, useContext } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import CircleLogo from "../components/AppLogo/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppTextInput from "../components/Auth/AppTextInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/authContext";

function Signin({ navigation }) {
  const [state, setState] = useContext(AuthContext);
  const [email, setEmail] = useState("sasco@gmail.com");
  const [password, setPassword] = useState("otompo123@");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("All fields are requied");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`/auth/signin`, {
        email,
        password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save in context
        setState(data);
        // console.log(data);
        // save response in asynce storage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        alert("Signin success");
        setEmail("");
        setPassword("");
        setLoading(false);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      setLoading(false);
    }
  };

  // const loadDataFrom = async () => {
  //   let data = await AsyncStorage.getItem("@auth");
  //   console.log(data);
  // };
  // loadDataFrom();

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={{ flexGrow: 1 }} // make the scrollView full screen
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={{ marginVertical: 100 }}>
        <CircleLogo />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email..."
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          setValue={setEmail}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={password}
          setValue={setPassword}
          placeholder="Password..."
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
        />
        <View style={styles.buttonContainer}>
          <SubmitButton
            title="Sign in"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
        <Text center>
          Not yet registered?{" "}
          <Text onPress={() => navigation.navigate("Signup")} color="#ff0000">
            Sign Up
          </Text>
        </Text>
        <Text
          //   onPress={() => navigation.navigate("ForgotPassword")}
          small
          center
          color="orange"
          style={{ marginTop: 15 }}
        >
          Forgot Password?
        </Text>
        {/* <Text>{JSON.stringify({ email, password }, null, 4)}</Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    // width: 80,
    // height: 80,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
