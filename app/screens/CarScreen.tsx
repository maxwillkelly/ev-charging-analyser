import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

const BatteryCard = () => {
  return (
    <View style={styles.leftCard}>
      <Text style={styles.cardHeading}>Battery</Text>
      <View style={styles.cardCentred}>
        <View style={styles.batteryWidgetVertical}>
          <Text style={styles.batteryPercentage}>80%</Text>
          <View style={styles.batteryLevel}></View>
        </View>
      </View>
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
          style={styles.leftIcon}
        />
        {/* <View style={styles.divider} /> */}
        <Text style={styles.cardBody}>350 miles</Text>
      </View>
    </View>
  );
};

const LockCard = () => {
  return (
    <View style={styles.rightCard}>
      <Text style={styles.cardHeading}>Car Locked</Text>
      <View style={styles.cardCentred}>
        <MaterialCommunityIcons
          name="lock-open"
          size={30}
          color={colours.secondary}
        />
      </View>
    </View>
  );
};

const CarScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.carPlaceholder}></View>
      <Text style={styles.title}>Andy's Tesla Model X</Text>
      <View style={styles.appletContainer}>
        <BatteryCard />
        <RangeCard />
        <LockCard />
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
    marginVertical: 20,
  },
  batteryPercentage: {
    color: colours.white,
    fontFamily: fonts.medium,
    fontSize: 28,
    textAlign: "center",
  },
  batteryLevel: {
    backgroundColor: colours.green,
    width: "100%",
    height: "80%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  batteryWidgetVertical: {
    backgroundColor: colours.lightGrey,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardBody: {
    fontFamily: fonts.medium,
    fontSize: 20,
  },
  cardCentred: {
    flex: 1,
    backgroundColor: colours.lightestGrey,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  line: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 198,
    width: 142,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rightCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 94,
    width: 177,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  divider: {
    flex: 1,
  },
  carPlaceholder: {
    marginTop: 80,
    height: 162,
    width: 330,
    borderWidth: 1,
    borderColor: colours.jet,
  },
  appletContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "flex-start",
  },
  leftIcon: {
    marginRight: 30,
  },
});

export default CarScreen;
