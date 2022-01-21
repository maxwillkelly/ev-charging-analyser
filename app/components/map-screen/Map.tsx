import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

export const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 56.46855061730443,
        longitude: -2.994651893483153,
        latitudeDelta: 0.12,
        longitudeDelta: 0.12,
      }}
      mapType="standard"
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
