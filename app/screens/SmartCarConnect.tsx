import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import WebView, { WebViewNavigation } from "react-native-webview";
import { useMutation, useQueryClient } from "react-query";
import { useUserStore } from "../stores/useUserStore";
import { GetSmartCarTokenDto } from "../api/dtos/GetSmartCarToken.dto";
import { getSmartCarTokenAsync } from "../api/smartCarApi";
import { RootStackScreenProps } from "../types";
import { AddCarDto, CarDto } from "../api/dtos/Car.dto";
import { addCarAsync } from "../api/carsApi";
import { AxiosError } from "axios";
import { BASE_URL } from "../api";

type Status = "Initial" | "Loading" | "Success" | "Error";

const SmartCarConnect = ({
  navigation,
}: RootStackScreenProps<"SmartCarConnect">) => {
  const [status, setStatus] = useState<Status>("Initial");
  const [error, setError] = useState<Error>();
  const queryClient = useQueryClient();
  const { setSmartCarToken, user } = useUserStore();

  useEffect(() => {
    if (!user) navigation.navigate("Login");
  }, [user]);

  const getTokenMutation = useMutation<GetSmartCarTokenDto, AxiosError, string>(
    "smartCarToken",
    (url) => getSmartCarTokenAsync(url),
    {
      onError: (error) => {
        console.error(error);
        setError(error);
        setStatus("Error");
      },
      onSuccess: (data) => {
        setSmartCarToken(data);
      },
    }
  );

  const storeTokenMutation = useMutation<CarDto, Error, AddCarDto>(
    "car",
    addCarAsync,
    {
      onError: (error) => {
        console.error(error);
        setError(error);
        setStatus("Error");
      },
      onSuccess: () => {
        navigation.navigate("CarList");
      },
    }
  );

  const handleNavigationStateChangeAsync = async (
    navState: WebViewNavigation
  ) => {
    if (navState.url.includes(`${BASE_URL}/smartcar/exchange`)) {
      setStatus("Loading");

      const userId = user?.id;

      if (!userId) {
        navigation.navigate("Login");
        return null;
      }

      const token = await getTokenMutation.mutateAsync(navState.url);

      const car = await storeTokenMutation.mutateAsync({
        userId,
        ...token,
      });

      queryClient.invalidateQueries("cars");
    }
  };

  if (status === "Loading")
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (status === "Error") {
    return (
      <View style={styles.container}>
        <Text>Error occurred</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </View>
    );
  }

  return (
    <WebView
      style={styles.container}
      originWhitelist={[`${BASE_URL}/smartcar/login`, "https"]}
      source={{ uri: `${BASE_URL}/smartcar/login` }}
      onNavigationStateChange={handleNavigationStateChangeAsync}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SmartCarConnect;
