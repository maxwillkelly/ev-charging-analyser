import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

const SmartCarConnect = () => {
  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ uri: "http://localhost:5000/smartcar/login" }}
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
