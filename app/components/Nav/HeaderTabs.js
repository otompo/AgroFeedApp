import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../../context/authContext";
import Screen from "../Screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HeaderTabs() {
  const [state, setState] = useContext(AuthContext);

  const handleLogoutSubmit = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => handleLogoutSubmit()}>
        <Icon name="sign-out" size={25} color="#ff0000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HeaderTabs;
