import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";

const DateNav = () => {
  return (
    <View style={styles.dateNav}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={colours.secondary}
        style={{ padding: 8 }}
      />
      <Text style={styles.date}>Sun, 21 Nov 2021</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={colours.secondary}
        style={{ padding: 8 }}
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
    backgroundColor: colours.white
  },
  date: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
});

export default DateNav;
