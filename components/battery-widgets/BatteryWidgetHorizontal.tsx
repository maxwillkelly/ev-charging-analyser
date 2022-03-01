import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { BatteryWidgetProps, getPercentageString } from "./shared";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
  },
  batteryIcon: {
    backgroundColor: colours.lightGrey,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 2,
    width: "60%",
  },
  batteryLevel: {
    backgroundColor: colours.green,
    height: "100%",
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  percentage: {
    fontFamily: fonts.bold,
    fontSize: 18,
  },
});

export const ChargingIconHorizontal: React.FC = () => (
  <View
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    }}
  >
    <MaterialCommunityIcons
      name="lightning-bolt"
      size={24}
      color={colours.white}
      style={{ zIndex: 10, alignSelf: "center" }}
    />
  </View>
);

export const BatteryWidgetHorizontal: React.FC<BatteryWidgetProps> = ({
  percentRemaining,
  state,
}) => {
  console.log(state);
  const percentageString = getPercentageString(percentRemaining);
  return (
    <View style={styles.card}>
      <View style={styles.batteryIcon}>
        <View
          style={{ ...styles.batteryLevel, width: percentageString }}
        ></View>
        {state === "CHARGING" && <ChargingIconHorizontal />}
      </View>
      <Text style={styles.percentage}>{percentageString}</Text>
    </View>
  );
};
