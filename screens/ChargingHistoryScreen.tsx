import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import { getChargesAsync } from "../api/carsApi";
import Spinner from "../components/Spinner";
import { useCarStore } from "../stores/useCarStore";
import ChargeItem from "../components/charging-history/ChargeItem";
import fonts from "../styles/fonts";
import { Charge } from "../api/dtos/Charge";
import colours from "../styles/colours";
import DateNav from "../components/charging-history/DateNav";
import { formatISO, startOfToday } from "date-fns";

const ChargeHistoryScreen = () => {
  const [selectedDay, setSelectedDay] = useState<Date>(startOfToday());
  const { selectedCar } = useCarStore();

  const selectedDayString = formatISO(selectedDay);

  const { isLoading, error, data } = useQuery<Charge[]>(
    ["charges", selectedDayString],
    () => getChargesAsync(selectedCar?.id, selectedDayString),
    {
      enabled: !!selectedCar,
    }
  );

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <ScrollView>
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
      <DateNav selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <ScrollView>
        {data.map((charge) => (
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
    backgroundColor: colours.white
  },
});

export default ChargeHistoryScreen;
