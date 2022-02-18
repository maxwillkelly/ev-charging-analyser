import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AxiosError } from "axios";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useQuery } from "react-query";
import { getCarsAsync } from "../api/carsApi";
import { CarDto } from "../api/dtos/Attributes.dto";
import { CarCard } from "../components/car-list/CarCard";
import { Text, View } from "../components/Themed";
import { useUserStore } from "../stores/useUserStore";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import { RootStackParamList } from "../types";

import {
  registerLocationTask,
  subscribeToLocationUpdatesAsync,
  unregisterLocationTaskAsync,
} from "../services/Location";

const CarListScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { user, smartCarToken } = useUserStore();

  const { isIdle, isLoading, error, data } = useQuery<CarDto[], AxiosError>(
    "cars",
    () => getCarsAsync(smartCarToken?.accessToken),
    {
      enabled: !!smartCarToken?.accessToken,
    }
  );

  useEffect(() => {
    if (!user) navigation.navigate("Login");
  }, [user]);

  useEffect(() => {
    const startLocationService = async () => {
      registerLocationTask(user?.id);
      await subscribeToLocationUpdatesAsync();
    };

    startLocationService();

    // return () => {
    //   const stopLocationService = async () => {
    //     await unregisterLocationTaskAsync();
    //   };

    //   stopLocationService();
    // };
  }, [user]);

  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error occurred</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </View>
    );

  if (isIdle || data)
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Cars</Text>
          <ScrollView>
            <View style={styles.carContainer}>
              {data
                ? data.map((car) => (
                    <CarCard key={car.id} car={car} navigation={navigation} />
                  ))
                : null}
            </View>
          </ScrollView>
        </View>
        <Pressable
          style={{ margin: 16, alignSelf: "flex-end" }}
          onPress={() => navigation.navigate("SmartCarConnect")}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={70}
            color={colours.primary}
          />
        </Pressable>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  innerContainer: {
    marginHorizontal: 24,
    marginVertical: 44,
    flex: 1,
  },
  title: {
    marginTop: 24,
    fontSize: 36,
    fontFamily: fonts.bold,
  },
  carContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default CarListScreen;
