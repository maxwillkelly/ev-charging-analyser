import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCarStore } from "../../stores/useCarStore";
import { getPercentageString } from "../battery-widgets/shared";

const ChargingWidget = () => {
  const { selectedCar } = useCarStore();

  if (!selectedCar) return null;

  const { percentRemaining } = selectedCar;

  const getMainColour = (percentage: number) => {
    if (percentage > 0.3) return colours.green;
    if (percentage > 0.1) return colours.warning;
    return colours.error;
  };

  const mainColour = getMainColour(percentRemaining);
  const percentageString = getPercentageString(percentRemaining);

  return (
    <View>
      <View
        style={{
          width: 160,
          height: 160,
          borderRadius: 160 / 2,
          borderWidth: 10,
          borderColor: mainColour,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 48,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={24}
          color={mainColour}
          style={{
            position: "absolute",
            zIndex: 10,
            alignSelf: "flex-start",
            margin: 20,
          }}
        />
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            borderWidth: 2,
            borderColor: mainColour,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 36,
              fontFamily: fonts.semiBold,
            }}
          >
            {percentageString}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChargingWidget;
