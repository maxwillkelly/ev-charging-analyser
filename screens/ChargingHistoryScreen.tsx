import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DateNav from "../components/charging-history/DateNav";

const ChargeHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <DateNav />
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
