import { Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import {
  getBatteryColour,
  getPercentageString,
} from "../battery-widgets/shared";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  percentRemaining: number;
};

const ChargingWidgetSmall: React.FC<Props> = ({ percentRemaining }) => {
  const mainColour = getBatteryColour(percentRemaining);
  const percentageString = getPercentageString(percentRemaining);

  return (
    <View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          borderWidth: 4.5,
          borderColor: mainColour,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          margin: 3,
        }}
      >
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={6}
          color={mainColour}
          style={{
            position: "absolute",
            zIndex: 10,
            alignSelf: "flex-start",
            margin: 3,
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            borderWidth: 1.5,
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
              fontSize: 9,
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

export default ChargingWidgetSmall;
