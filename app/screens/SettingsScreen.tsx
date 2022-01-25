import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useUserStore } from "../stores/useUserStore";
import { RootTabScreenProps } from "../types";

const SettingsScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  const { logout } = useUserStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Log out"
        onPress={() => {
          logout();
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Onboard"
        onPress={() => {
          logout();
          navigation.navigate("Onboarding");
        }}
      />
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
