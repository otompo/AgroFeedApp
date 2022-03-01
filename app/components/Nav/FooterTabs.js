import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Text from "@kaloraat/react-native-text";
import { Divider } from "react-native-elements";
import colors from "../../config/colors";

export const Tabs = ({ title, icon, screenName, routeName }) => {
  const activeScreenColor = screenName === routeName && `${colors.primary}`;
  return (
    <TouchableOpacity>
      <>
        <Icon
          name={icon}
          size={30}
          style={{ marginBottom: 3, alignSelf: "center" }}
          color={activeScreenColor}
        />
        <Text>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

function FooterTabs() {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log(route);
  // console.log(navigation);
  return (
    <>
      <Divider width={1} />
      <View style={styles.footerStyle}>
        <Tabs
          title="Home"
          icon="home"
          screenName="Home"
          routeName={route.name}
        />
        <Tabs
          title="Trending"
          icon="fire"
          screenName="Trending"
          routeName={route.name}
        />
        <Tabs
          title="Alert"
          icon="bell"
          screenName="Alert"
          routeName={route.name}
        />
        <Tabs
          title="Accounts"
          icon="user"
          screenName="Accounts"
          routeName={route.name}
        />
      </View>
    </>
  );
}

export default FooterTabs;
const styles = StyleSheet.create({
  footerStyle: {
    zIndex: 3, // works on ios
    elevation: 3,
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
});
