import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";

function CircleLogo({ children }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 190,
          width: 190,
          borderRadius: 100,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 2,
          marginTop: -60,
          marginBottom: 50,
        }}
      >
        {children ? (
          children
        ) : (
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 300,
              height: 300,
              marginHorizontal: 30,
            }}
          />
        )}
        <Text style={styles.slogan}>Every Farmer Best Friend</Text>
      </View>
    </View>
  );
}

export default CircleLogo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  slogan: {
    top: -130,
  },
});
