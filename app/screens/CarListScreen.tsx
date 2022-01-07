import React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const CarListScreen = ({ navigation }: RootTabScreenProps<"CarList">) => {
  return (
    <View style={styles.container}>
      <Text>Car List Screen</Text>
      <Button title="Car Screen" onPress={() => navigation.navigate("Root")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CarListScreen;
