import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { BatteryWidgetProps, getPercentageString } from "./shared";

const ChargingIconVertical: React.FC = () => (
  <MaterialCommunityIcons
    name="lightning-bolt"
    size={32}
    color={colours.white}
    style={{
      padding: 16,
      position: "absolute",
      zIndex: 10,
      alignSelf: "center",
    }}
  />
);

export const BatteryWidgetVertical: React.FC<BatteryWidgetProps> = ({
  percentRemaining,
  state,
}) => {
  const percentageString = getPercentageString(percentRemaining);
  return (
    <View style={styles.leftCard}>
      <Text style={styles.cardHeading}>Battery</Text>
      <View style={styles.cardCentred}>
        <View style={styles.batteryWidgetVertical}>
          {state === "CHARGING" && <ChargingIconVertical />}
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
