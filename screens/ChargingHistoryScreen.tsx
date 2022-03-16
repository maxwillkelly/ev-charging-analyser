import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChargeItem from "../components/charging-history/ChargeItem";
import DateNav from "../components/charging-history/DateNav";

const ChargeHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <DateNav />
      <ChargeItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ChargeHistoryScreen;
