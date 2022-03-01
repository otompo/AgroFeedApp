import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import CircleLogo from "../components/AppLogo/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppTextInput from "../components/Auth/AppTextInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/authContext";

function Signup({ navigation }) {
  const [state, setState] = useContext(AuthContext);
  const [name, setName] = useState("Fufu");
  const [email, setEmail] = useState("fufu@gmail.com");
  const [password, setPassword] = useState("otompo123@");
  const [cf_password, setCf_Password] = useState("otompo123@");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !name || !password) {
      alert("All fields are requied");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`/auth/signup`, {
        name,
        email,
        password,
        cf_password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save in context
        // setState(data);
        // console.log(data);
        // await AsyncStorage.setItem("@auth", JSON.stringify(data));
        alert("Sign up success");
        setName("");
        setEmail("");
        setPassword("");
        setCf_Password("");
        setLoading(false);
        navigation.navigate("Signin");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      setLoading(false);
    }
  };

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
          autoCapitalize="words"
          autoCorrect={false}
          icon="rename-box"
          placeholder="Name..."
          value={name}
          setValue={setName}
        />
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
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={cf_password}
          onChange={setCf_Password}
          placeholder="Confirm Password..."
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
        />
        <View style={styles.buttonContainer}>
          <SubmitButton
            title="Sign up"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
        <Text center>
          Already Joined?{" "}
          <Text onPress={() => navigation.navigate("Signin")} color="#ff0000">
            Sign In
          </Text>
        </Text>
        {/* <Text>{loadData && loadData}</Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Signup;

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
