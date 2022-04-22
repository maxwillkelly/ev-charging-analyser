import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { useMutation, useQueryClient } from "react-query";
import { useUserStore } from "../stores/useUserStore";
import { exchangeAsync } from "../api/smartCarApi";
import { RootStackScreenProps } from "../types";
import { AxiosError } from "axios";
import { API_URL } from "../api";
import { OnShouldStartLoadWithRequest } from "react-native-webview/lib/WebViewTypes";
import Spinner from "../components/Spinner";
import ErrorToast from "../components/ErrorToast";

type Status = "Initial" | "Loading" | "Success" | "Error";

const SmartCarConnect = ({
  navigation,
}: RootStackScreenProps<"SmartCarConnect">) => {
  const webView = useRef<WebView>(null);
  const [status, setStatus] = useState<Status>("Initial");
  const [error, setError] = useState<AxiosError>();
  const [uri, setUri] = useState("");
  const queryClient = useQueryClient();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) return navigation.navigate("Login");
    const uri = generateUri(user.id);
    setUri(uri);
  }, [user, user?.id]);

  const mutation = useMutation<boolean, AxiosError, string>(
    "smartCarToken",
    (url) => exchangeAsync(url),
    {
      onError: (error) => {
        console.error(error);
        setError(error);
        setStatus("Error");
      },
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
        navigation.navigate("CarList");
      },
    }
  );

  const generateUri = (userId: string): string => {
    const startingUri = `${API_URL}/smartcar/login`;
    const url = new URL(startingUri);
    url.searchParams.append("userId", userId);
    return url.href;
  };

  const handleNavigationStateChange: OnShouldStartLoadWithRequest = (
    request
  ) => {
    const { url } = request;
    if (url.includes(`smartcar/exchange`)) {
      setStatus("Loading");

      webView.current?.stopLoading();

      const userId = user?.id;

      if (!userId) {
        navigation.navigate("Login");
        return false;
      }

      const mutateAsync = async () => await mutation.mutateAsync(url);

      mutateAsync();
      return false;
    }
    return true;
  };

  if (status === "Loading") return <Spinner />;

  if (status === "Error") {
    if (error?.response) return <ErrorToast message={error.response.data.message} />
    return <ErrorToast message={error?.message || ""} />
  }

  return (
    <WebView
      ref={webView}
      style={styles.container}
      originWhitelist={[
        API_URL,
        "https://ev-charging-analyser-api-stag.herokuapp.com",
        "https://ev-charging-analyser-api-prod.herokuapp.com",
        "https://*.smartcar.com",
      ]}
      source={{ uri }}
      onShouldStartLoadWithRequest={handleNavigationStateChange}
      setSupportMultipleWindows={false}
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
