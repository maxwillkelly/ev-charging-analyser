import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackParamList } from "../types";

export default function TabOneScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Connect car"
        onPress={() => navigation.navigate("SmartCarConnect")}
      />
    </View>
  );
}

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
