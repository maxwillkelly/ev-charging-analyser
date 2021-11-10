import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import WebView, { WebViewNavigation } from "react-native-webview";
import { useMutation } from "react-query";
import { useUserStore } from "../stores/useUserStore";
import { GetSmartCarTokenDto } from "../api/dtos/GetSmartCarToken.dto";
import { getSmartCarTokenAsync } from "../api/smartCarApi";

type Status = "Initial" | "Loading" | "Success" | "Error";

const SmartCarConnect: React.FC = () => {
  const [status, setStatus] = useState<Status>("Initial");
  const [error, setError] = useState<Error>();
  const { smartCarToken, setSmartCarToken } = useUserStore();

  const mutation = useMutation<GetSmartCarTokenDto, Error, string>(
    "smartCarToken",
    (url) => getSmartCarTokenAsync(url),
    {
      onError: (error) => {
        setError(error);
        setStatus("Error");
      },
      onSuccess: (data) => {
        setSmartCarToken(data);
        setStatus("Success");
      },
    }
  );

  const handleNavigationStateChangeAsync = async (
    navState: WebViewNavigation
  ) => {
    if (navState.url.includes("exchange")) {
      setStatus("Loading");
      await mutation.mutateAsync(navState.url);
    }
  };

  if (status === "Loading")
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (status === "Success")
    return (
      <View style={styles.container}>
        <Text>Car connection successful</Text>
        <Text>{JSON.stringify(smartCarToken, null, 2)}</Text>
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
      originWhitelist={["*"]}
      source={{ uri: "http://localhost:5000/smartcar/login" }}
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
