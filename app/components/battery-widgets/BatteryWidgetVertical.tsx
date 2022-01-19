import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { BatteryWidgetProps, getPercentageString } from "./shared";

export const BatteryWidgetVertical: React.FC<BatteryWidgetProps> = ({
  percentRemaining,
}) => {
  const percentageString = getPercentageString(percentRemaining);
  return (
    <View style={styles.leftCard}>
      <Text style={styles.cardHeading}>Battery</Text>
      <View style={styles.cardCentred}>
        <View style={styles.batteryWidgetVertical}>
          <View
            style={{
              zIndex: 10,
              position: "absolute",
              top: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text style={styles.batteryPercentage}>{percentageString}</Text>
          </View>
          <View
            style={{ ...styles.batteryLevel, height: percentageString }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryPercentage: {
    color: colours.white,
    fontFamily: fonts.medium,
    fontSize: 28,
  },
  batteryLevel: {
    backgroundColor: colours.green,
    width: "100%",
    // height: "80%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  batteryWidgetVertical: {
    backgroundColor: colours.lightGrey,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardCentred: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colours.lightestGrey,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  leftCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 206,
    width: 142,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
