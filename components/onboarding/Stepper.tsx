import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../Themed";
import colours from "../../styles/colours";

type Props = {
  selected: number;
  stepNumber: number;
};

const Stepper: React.FC<Props> = ({ selected, stepNumber }) => {
  return (
    <View style={stepperStyles.container}>
      {[...Array(stepNumber).keys()].map((k) => (
        <MaterialCommunityIcons
          key={k}
          name="circle-small"
          size={40}
          style={{ margin: -14, padding: 0 }}
          color={k + 1 === selected ? colours.primary : colours.jet}
        />
      ))}
    </View>
  );
};

const stepperStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Stepper;