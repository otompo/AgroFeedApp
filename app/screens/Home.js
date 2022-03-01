import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import HomeCard from "../components/HomeCard";
import { AuthContext } from "../context/authContext";
import Text from "@kaloraat/react-native-text";
import Screen from "../components/Screen";
import FooterTabs from "../components/Nav/FooterTabs";
function Home({ navigation }) {
  const [state, setState] = useContext(AuthContext);

  return (
    <>
      <View style={styles.mainContainer}>
        <Text>{state && state.user.name}</Text>
        <View style={styles.container}>
          <HomeCard
            title="Services"
            icon="briefcase"
            onPress={() => console.log("Services")}
          />
          <HomeCard
            title="Buy or Sell"
            icon="basket"
            onPress={() => console.log("Services")}
          />
          <HomeCard
            title="library"
            icon="library"
            onPress={() => console.log("Services")}
          />
          <HomeCard
            title="Crop box"
            icon="sprout"
            onPress={() => console.log("Services")}
          />
          <HomeCard
            title="Training"
            icon="lightbulb-on"
            onPress={() => console.log("Services")}
          />
          <HomeCard
            title="Market"
            icon="cart"
            onPress={() => console.log("Services")}
          />
        </View>

        <FooterTabs />
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around", //replace with flex-end or center
    marginVertical: 50,
    marginHorizontal: 10,
    flexWrap: "wrap",
  },
});
