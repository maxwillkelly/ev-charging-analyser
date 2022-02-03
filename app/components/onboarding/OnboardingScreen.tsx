import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "../Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import OnboardingSteps from "./OnboardingSteps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type Props = {
  title: string;
  description: string;
  navigation: NativeStackNavigationProp<RootStackParamList, "Onboarding">;
  onNext: () => void;
};

const OnboardingScreen: React.FC<Props> = ({
  title,
  description,
  navigation,
  onNext,
}) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="map-marker-circle"
            size={200}
            color={colours.primary}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <OnboardingSteps navigation={navigation} onNext={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 28,
    marginVertical: 20,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
});

export default OnboardingScreen;
