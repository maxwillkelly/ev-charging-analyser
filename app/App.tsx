import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { StyleSheet } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
      <SafeAreaProvider>
        <WebView
          style={styles.container}
          originWhitelist={["*"]}
          source={{ uri: "http://localhost:5000/smartcar/login" }}
        />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
