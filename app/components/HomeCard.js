import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function HomeCard({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={100}
          color={colors.primary}
          //   style={styles.icon}
        />
        <Text center medium color="#000">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  box2: {
    height: 150,
    width: 150,
    backgroundColor: "green",
    borderRadius: 15,
    margin: 10,
  },
  box3: {
    height: 150,
    width: 150,
    backgroundColor: "yellow",
    borderRadius: 15,
    margin: 10,
  },
  box4: {
    height: 150,
    width: 150,
    backgroundColor: "gold",
    borderRadius: 15,
    margin: 10,
  },
  box5: {
    height: 150,
    width: 150,
    backgroundColor: "black",
    borderRadius: 15,
    margin: 10,
  },
  box6: {
    height: 150,
    width: 150,
    backgroundColor: "gray",
    borderRadius: 15,
    margin: 10,
  },
});
