import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";

const ChargingConnection = () => {
  return (
    <Pressable onPress={() => undefined}>
      <View
        style={{
          borderRadius: 6,
          margin: 10,
          padding: 10,
          backgroundColor: colours.lightestGrey,
          height: 90,
          width: 190,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.cardHeading}>Connection</Text>
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <MaterialCommunityIcons
            name="ev-station"
            size={30}
            color={colours.secondary}
          />
          <Text style={styles.cardDescription}>Unplugged</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardDescription: {
    fontFamily: fonts.medium,
    fontSize: 18,
  },
});

export default ChargingConnection;
