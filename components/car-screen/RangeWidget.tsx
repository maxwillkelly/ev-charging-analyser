import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import RightCard from "./cards/RightCard";

type RangeWidgetProps = { range: number };

export const RangeWidget: React.FC<RangeWidgetProps> = ({ range }) => {
  const roundedRange = Math.round(range);
  return (
    <RightCard>
      <Text style={styles.cardHeading}>Range</Text>
      <View style={styles.line}>
        <MaterialCommunityIcons
          name="map-marker-distance"
          size={30}
          color={colours.secondary}
          style={styles.leftIcon}
        />
        <Text style={styles.cardBody}>{roundedRange} kms</Text>
      </View>
    </RightCard>
  );
};

const styles = StyleSheet.create({
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardBody: {
    fontFamily: fonts.medium,
    fontSize: 20,
  },
  line: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftIcon: {
    marginRight: 30,
  },
});
