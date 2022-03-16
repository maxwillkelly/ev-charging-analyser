import React from "react";
import { View } from "react-native";
import colours from "../../../styles/colours";

export const LeftCard: React.FC = ({ children }) => {
  return (
    <View
      style={{
        borderRadius: 6,
        margin: 10,
        padding: 10,
        backgroundColor: colours.lightestGrey,
        height: 206,
        width: 142,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {children}
    </View>
  );
};

export default LeftCard;
