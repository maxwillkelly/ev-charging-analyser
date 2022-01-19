import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { BatteryWidgetProps, getPercentageString } from "./shared";

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

export const BatteryWidgetHorizontal: React.FC<BatteryWidgetProps> = ({
  percentRemaining,
}) => {
  const percentageString = getPercentageString(percentRemaining);
  return (
    <View style={styles.card}>
      <View style={styles.batteryIcon}>
        <View
          style={{ ...styles.batteryLevel, width: percentageString }}
        ></View>
      </View>
      <Text style={styles.percentage}>{percentageString}</Text>
    </View>
  );
};
