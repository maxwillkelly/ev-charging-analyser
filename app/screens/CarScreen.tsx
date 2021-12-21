import * as React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import useToggle from "../hooks/useToggle";

const BatteryCard = () => {
  return (
    <View style={styles.leftCard}>
      <Text style={styles.cardHeading}>Battery</Text>
      <View style={styles.cardCentred}>
        <View style={styles.batteryWidgetVertical}>
          <View
            style={{
              zIndex: 10,
              position: "absolute",
              top: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text style={styles.batteryPercentage}>80%</Text>
          </View>
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
        <Text style={styles.cardBody}>350 miles</Text>
      </View>
    </View>
  );
};

const LockCard = () => {
  const [locked, toggleLocked] = useToggle();

  return (
    <Pressable onPress={toggleLocked}>
      <View
        style={locked ? styles.rightCard : [styles.rightCard, styles.active]}
      >
        <Text
          style={
            locked ? styles.cardHeading : [styles.cardHeading, styles.active]
          }
        >
          Car {locked ? "Locked" : "Unlocked"}
        </Text>
        <View
          style={
            locked ? styles.cardCentred : [styles.cardCentred, styles.active]
          }
        >
          <View
            style={
              locked
                ? styles.cardCentredVertical
                : [styles.cardCentredVertical, styles.active]
            }
          >
            <MaterialCommunityIcons
              name={locked ? "lock" : "lock-open"}
              size={30}
              color={locked ? colours.secondary : colours.white}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const CarScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/tesla-model-x.png")}
        style={{ marginTop: 80, height: 162, width: 330 }}
      />
      <Text style={styles.title}>Andy's Tesla Model X</Text>
      <View style={styles.appletContainer}>
        <BatteryCard />
        <View>
          <RangeCard />
          <LockCard />
        </View>
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
    justifyContent: "flex-end",
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
    flexDirection: "row",
    backgroundColor: colours.lightestGrey,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  active: {
    backgroundColor: colours.primary,
    color: colours.white,
  },
  cardCentredVertical: {
    backgroundColor: colours.lightestGrey,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
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
    height: 206,
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
  appletContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  leftIcon: {
    marginRight: 30,
  },
});

export default CarScreen;
