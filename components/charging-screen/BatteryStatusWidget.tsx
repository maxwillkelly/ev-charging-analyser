import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCarStore } from "../../stores/useCarStore";
import { ChargeState } from "../../api/dtos/Car.dto";

const BatteryStatusWidget = () => {
  const { selectedCar } = useCarStore();

  if (!selectedCar) return null;

  const getChargeStateString = (chargeState: ChargeState) => {
    switch (chargeState) {
      case "CHARGING":
        return "Charging";
      case "FULLY_CHARGED":
        return "Fully Charged";
      case "NOT_CHARGING":
        return "Not Charging";
      default:
        return "Error";
    }
  };

  const chargeStateString = getChargeStateString(selectedCar.state);

  return (
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
      <Text style={styles.cardHeading}>Status</Text>
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
          name="battery-80"
          size={30}
          color={colours.secondary}
        />
        <Text style={styles.cardDescription}>{chargeStateString}</Text>
      </View>
    </View>
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

export default BatteryStatusWidget;
