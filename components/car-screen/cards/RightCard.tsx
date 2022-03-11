import React from "react";
import { StyleSheet, View } from "react-native";
import colours from "../../../styles/colours";

const RightCard: React.FC = ({ children }) => (
  <View style={rightCardStyles.rightCard}>{children}</View>
);

export const rightCardStyles = StyleSheet.create({
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
});

export default RightCard;
