import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const BatteryCard = () => {
  return null;
};

const RangeCard = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>Range</Text>
      <Text style={styles.cardHeading}>350 miles</Text>
    </View>
  );
};

const LockCard = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>Car Unlocked</Text>
    </View>
  );
};

const CarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Andy's Tesla Model X</Text>
      <BatteryCard />
      <RangeCard />
      <LockCard />
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
  cardHeading: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CarScreen;
