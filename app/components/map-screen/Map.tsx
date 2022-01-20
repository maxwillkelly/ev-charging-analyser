import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 41.3995345,
        longitude: 2.1909796,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
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
