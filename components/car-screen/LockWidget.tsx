import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import colours from "../../styles/colours";
import useToggle from "../../hooks/useToggle";
import { useMutation } from "react-query";
import { lockAsync, unlockAsync } from "../../api/carsApi";
import { CarActionResponse } from "../../api/dtos/CarAction.dto";
import { useUserStore } from "../../stores/useUserStore";
import fonts from "../../styles/fonts";
import { useCarStore } from "../../stores/useCarStore";
import { rightCardStyles } from "./cards/RightCard";

export const LockWidget = () => {
  const [locked, toggleLocked] = useToggle();
  const { selectedCar } = useCarStore();
  const { user } = useUserStore();

  const userId = user?.id as string;
  const vehicleId = selectedCar?.id as string;

  const lockMutation = useMutation<CarActionResponse>(
    "lockUnlockEvent",
    () => {
      return lockAsync({ userId, vehicleId });
    },
    {
      onSuccess: () => toggleLocked(true),
      onError: (error) => console.error(error),
    }
  );

  const unlockMutation = useMutation<CarActionResponse>(
    "lockUnlockEvent",
    () => {
      return unlockAsync({ userId, vehicleId });
    },
    {
      onSuccess: () => toggleLocked(false),
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
        style={
          locked
            ? rightCardStyles.rightCard
            : [rightCardStyles.rightCard, styles.active]
        }
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

const styles = StyleSheet.create({
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
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
});
