import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import colours from "../../styles/colours";

type StepperProps = {
  selected: number;
  stepNumber: number;
};

const Stepper: React.FC<StepperProps> = ({ selected, stepNumber }) => {
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

const OnboardingSteps: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          style={styles.icon}
          color={colours.secondary}
        />
        <Stepper stepNumber={5} selected={4} />
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          style={styles.icon}
          color={colours.secondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
  },
  group: {
    flex: 1,
    flexDirection: "row",
  },
  icon: { alignSelf: "center", marginHorizontal: 8 },
});

export default OnboardingSteps;
