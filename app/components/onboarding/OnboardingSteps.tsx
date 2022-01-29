import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../../components/Themed";
import colours from "../../styles/colours";
import Stepper from "./Stepper";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Onboarding">;
  onNext: () => void;
}

const OnboardingSteps: React.FC<Props> = ({ navigation, onNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          style={styles.icon}
          color={colours.secondary}
          onPress={() => navigation.goBack()}
        />
        <Stepper stepNumber={5} selected={4} />
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          style={styles.icon}
          color={colours.secondary}
          onPress={onNext}
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
