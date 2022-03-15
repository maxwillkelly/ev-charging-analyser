import * as React from "react";
import { StyleSheet } from "react-native";
import BatteryStatusWidget from "../../components/charging-screen/BatteryStatusWidget";
// import ChargeCard from "../../components/charging-screen/ChargeCard";
import ChargingConnection from "../../components/charging-screen/ChargingConnection";
import ChargingWidget from "../../components/charging-screen/ChargingWidget";
import HistoryCard from "../../components/charging-screen/HistoryCard";
import ScheduleCard from "../../components/charging-screen/ScheduleCard";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const ChargingScreen = ({ route, navigation }: RootTabScreenProps<"Charging">) => {
  return (
    <View style={styles.container}>
      <ChargingWidget />
      <View style={styles.appletContainer}>
        <BatteryStatusWidget />
        <ChargingConnection />
        {/* <ChargeCard /> */}
        <ScheduleCard route={route} navigation={navigation} />
        <HistoryCard route={route} navigation={navigation} />
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
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 100,
  },
});

export default ChargingScreen;
