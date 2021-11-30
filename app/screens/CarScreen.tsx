import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

const BatteryCard = () => {
  return (
    <View>
      <Text>80%</Text>
    </View>
  );
};

const RangeCard = () => {
  return (
    <View style={styles.rightCard}>
      <Text style={styles.cardHeading}>Range</Text>
      <View style={styles.line}>
        <MaterialCommunityIcons
          name="map-marker-distance"
          size={30}
          color={colours.secondary}
        />
        {/* <View style={styles.divider} /> */}
        <Text style={styles.cardHeading}>350 miles</Text>
      </View>
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
      <View style={styles.carPlaceholder}></View>
      <Text style={styles.title}>Andy's Tesla Model X</Text>
      <View style={styles.appletContainer}>
        {/* <BatteryCard /> */}
        <RangeCard />
        {/* <LockCard /> */}
      </View>
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
    fontSize: 20,
    marginVertical: 10,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: "400",
  },
  line: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightCard: {
    backgroundColor: colours.lightestGrey,
    alignItems: "flex-start",
    justifyContent: "center",
    // width: 130,
  },
  divider: {
    flex: 1,
  },
  carPlaceholder: {
    height: 500,
    borderColor: colours.jet,
  },
  appletContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
});

export default CarScreen;
