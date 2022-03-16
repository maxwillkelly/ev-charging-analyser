import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import ChargingWidgetSmall from "./ChargingWidgetSmall";

const ChargeItem = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="ev-station"
        size={24}
        color={colours.primary}
        style={{ alignSelf: "flex-start" }}
      />
      <View>
        <Text style={styles.location}>Home (15 Privet Drive)</Text>
        <Text style={styles.timesBetween}>1:23am - 4:56am</Text>
        <Text style={styles.chargingSpeed}>50kWh</Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ChargingWidgetSmall percentRemaining={0.78} />
        <MaterialIcons
          name="arrow-right-alt"
          size={30}
          color={colours.secondary}
        />
        <ChargingWidgetSmall percentRemaining={1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  timesBetween: {
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  chargingSpeed: {
    fontFamily: fonts.light,
    fontSize: 14,
  },
});

export default ChargeItem;
