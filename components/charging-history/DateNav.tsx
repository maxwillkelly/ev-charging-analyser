import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { addDays, format, subDays } from "date-fns";

type Props = {
  selectedDay: Date;
  setSelectedDay: Dispatch<SetStateAction<Date>>;
};

const DateNav: React.FC<Props> = ({ selectedDay, setSelectedDay }) => {
  const formattedDate = format(selectedDay, "EEE, d MMM yyyy");

  const moveForwardADay = () => setSelectedDay((day) => addDays(day, 1));
  const moveBackADay = () => setSelectedDay((day) => subDays(day, 1));

  return (
    <View style={styles.dateNav}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={colours.secondary}
        style={styles.iconPadding}
        onPress={moveBackADay}
      />
      <Text style={styles.date}>{formattedDate}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={colours.secondary}
        style={styles.iconPadding}
        onPress={moveForwardADay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateNav: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  iconPadding: { padding: 8 },
});

export default DateNav;
