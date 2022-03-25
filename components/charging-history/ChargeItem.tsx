import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import ChargingWidgetSmall from "./ChargingWidgetSmall";
import { Charge } from "../../api/dtos/Charge";
import { format, parseISO } from "date-fns";

const DATE_FORMAT = "h:mm aaa";

type Props = {
  charge: Charge;
};

const ChargeItem: React.FC<Props> = ({ charge }) => {
  const startTime = format(parseISO(charge.startedAtTime), DATE_FORMAT);
  const finishTime = format(parseISO(charge.finishedAtTime), DATE_FORMAT);
  const timeString = `${startTime} - ${finishTime}`;

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 12,
        backgroundColor: colours.white,
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
        <Text style={styles.timesBetween}>{timeString}</Text>
        <Text style={styles.chargingSpeed}>50kWh</Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ChargingWidgetSmall
          percentRemaining={charge.startedAtPercentRemaining}
        />
        <MaterialIcons
          name="arrow-right-alt"
          size={24}
          color={colours.secondary}
        />
        <ChargingWidgetSmall
          percentRemaining={charge.finishedAtPercentRemaining}
        />
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
