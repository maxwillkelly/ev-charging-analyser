import * as React from "react";
import { StyleSheet, Image } from "react-native";
import BatteryStatusWidget from "../../components/charging-screen/BatteryStatusWidget";
import ChargeCard from "../../components/charging-screen/ChargeCard";
import ChargingConnection from "../../components/charging-screen/ChargingConnection";
import HistoryCard from "../../components/charging-screen/HistoryCard";
import ScheduleCard from "../../components/charging-screen/ScheduleCard";
import { View } from "../../components/Themed";

const ChargingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/tesla-model-x.png")}
        style={{ marginTop: 80, height: 162, width: 330 }}
      />
      <View style={styles.appletContainer}>
        <BatteryStatusWidget />
        <ChargingConnection />
        <ChargeCard />
        <ScheduleCard />
        <HistoryCard />
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
    fontSize: 20,
    fontWeight: "bold",
  },
  appletContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default ChargingScreen;
