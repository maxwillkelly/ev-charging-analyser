import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";

type RangeWidgetProps = { range: number };

export const RangeWidget: React.FC<RangeWidgetProps> = ({ range }) => {
  const roundedRange = Math.round(range);
  return (
    <View style={styles.rightCard}>
      <Text style={styles.cardHeading}>Range</Text>
      <View style={styles.line}>
        <MaterialCommunityIcons
          name="map-marker-distance"
          size={30}
          color={colours.secondary}
          style={styles.leftIcon}
        />
        <Text style={styles.cardBody}>{roundedRange} miles</Text>
      </View>
    </View>
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
  rightCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 94,
    width: 177,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  leftIcon: {
    marginRight: 30,
  },
});
