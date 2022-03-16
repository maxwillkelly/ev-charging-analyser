import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import ChargeItem from "../components/charging-history/ChargeItem";
// import DateNav from "../components/charging-history/DateNav";
import fonts from "../styles/fonts";

const ChargeHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fonts.medium, fontSize: 14, margin: 16 }}>
        No charging history is available at this time
      </Text>
      {/* <DateNav />
      <ChargeItem /> */}
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
