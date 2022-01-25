import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../../components/Themed";
import colours from "../../styles/colours";
import Stepper from "./Stepper";

const OnboardingSteps: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          style={styles.icon}
          color={colours.secondary}
          onPress={() => console.log("Clicked left")}
        />
        <Stepper stepNumber={5} selected={4} />
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          style={styles.icon}
          color={colours.secondary}
          onPress={() => console.log("Clicked right")}
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
