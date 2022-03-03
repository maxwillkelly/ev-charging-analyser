import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import useLogout from "../../hooks/useLogout";
import { RootTabScreenProps } from "../../types";

const SettingsScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  const logout = useLogout();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debug</Text>
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
          navigation.navigate("Onboarding", { screen: "Location" });
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
