import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import { VehicleDto } from "../api/dtos/VehicleDto.dto";
import { getVehicleAsync } from "../api/smartCarApi";
import { useUserStore } from "../stores/useUserStore";

const VehicleScreen = () => {
  const { smartCarToken } = useUserStore();

  const query = useQuery<VehicleDto, Error>("vehicle", () =>
    getVehicleAsync(smartCarToken.accessToken)
  );

  if (query.isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (query.error)
    return (
      <View style={styles.container}>
        <Text>Error occurred</Text>
        <Text>{JSON.stringify(query.error, null, 2)}</Text>
      </View>
    );

  return (
    <View>
      <Text>{JSON.stringify(query.data, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VehicleScreen;
