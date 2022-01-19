import * as React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import useToggle from "../hooks/useToggle";
import { useMutation } from "react-query";
import { lockAsync, unlockAsync } from "../api/carApi";
import { CarActionResponse } from "../api/dtos/CarAction.dto";
import { useUserStore } from "../stores/useUserStore";
import { RootTabScreenProps } from "../types";
import { BatteryWidgetVertical } from "../components/battery-widgets/BatteryWidgetVertical";

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
  const { smartCarToken } = useUserStore();

  const lockMutation = useMutation<CarActionResponse>(
    "lockUnlockEvent",
    () => {
      if (!smartCarToken?.accessToken)
        throw new Error("Smartcar Access Token not stored");
      else
        return lockAsync({ smartCarAccessToken: smartCarToken?.accessToken });
    },
    {
      onSuccess: toggleLocked,
      onError: (error) => console.error(error),
    }
  );

  const unlockMutation = useMutation<CarActionResponse>(
    "lockUnlockEvent",
    () => {
      if (!smartCarToken?.accessToken)
        throw new Error("Smartcar Access Token not stored");
      else
        return unlockAsync({ smartCarAccessToken: smartCarToken?.accessToken });
    },
    {
      onSuccess: toggleLocked,
      onError: (error) => console.error(error),
    }
  );

  const toggle = () => {
    if (locked) unlockMutation.mutate();
    else lockMutation.mutate();
  };

  return (
    <Pressable onPress={toggle}>
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

const CarScreen = ({ route }: RootTabScreenProps<"Car">) => {
  const { car } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/tesla-model-x.png")}
        style={{ marginTop: 80, height: 162, width: 330 }}
      />
      <Text style={styles.title}>{car.name}</Text>
      <View style={styles.appletContainer}>
        <BatteryWidgetVertical percentRemaining={car.percentRemaining} />
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
