import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootTabScreenProps } from "../../types";

const ScheduleCard = ({ navigation }: RootTabScreenProps<"Charging">) => {
  return (
    <Pressable onPress={() => navigation.navigate("ChargingSchedule")}>
      <View
        style={{
          borderRadius: 6,
          margin: 10,
          padding: 10,
          backgroundColor: colours.lightestGrey,
          height: 90,
          width: 140,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={styles.cardHeading}>Schedule</Text>
        <View style={styles.cardCentred}>
          <View style={styles.cardCentredVertical}>
            <MaterialCommunityIcons
              name="calendar-clock"
              size={30}
              color={colours.secondary}
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
  cardCentredVertical: {
    backgroundColor: colours.lightestGrey,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ScheduleCard;
