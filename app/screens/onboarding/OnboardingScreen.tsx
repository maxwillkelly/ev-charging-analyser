import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "../../components/Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";

type Props = {
  title: string;
  description: string;
};

const OnboardingLocationScreen: React.FC<Props> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="map-marker-circle"
        size={200}
        color={colours.primary}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 28,
    marginVertical: 20,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 20,
    marginVertical: 20,
  },
});

export default OnboardingLocationScreen;
