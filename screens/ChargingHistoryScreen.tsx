import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import { getChargesAsync } from "../api/carsApi";
import Spinner from "../components/Spinner";
import { useCarStore } from "../stores/useCarStore";
import ChargeItem from "../components/charging-history/ChargeItem";
import fonts from "../styles/fonts";
import BatteryLineChart from "../components/charging-history/BatteryLineChart";
import { Charge } from "../api/dtos/Charge";
import colours from "../styles/colours";

const ChargeHistoryScreen = () => {
  const { selectedCar } = useCarStore();

  const { isLoading, error, data } = useQuery<Charge[]>(
    "charges",
    () => getChargesAsync(selectedCar?.id),
    {
      enabled: !!selectedCar,
    }
  );

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <ScrollView style={{ backgroundColor: colours.white }}>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </ScrollView>
    );

  if (!data)
    return (
      <View style={styles.container}>
        {!data && (
          <Text style={{ fontFamily: fonts.medium, fontSize: 14, margin: 16 }}>
            No charging history is available at this time
          </Text>
        )}
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <BatteryLineChart batteryCharges={data} /> */}
        {data.map((charge) => (
          // <Text key={i}>{JSON.stringify(charge, null, 2)}</Text>
          <ChargeItem charge={charge} key={charge.startedAtTime} />
        ))}
      </ScrollView>
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
