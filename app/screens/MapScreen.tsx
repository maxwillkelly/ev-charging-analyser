import * as React from "react";
import { StyleSheet } from "react-native";
import { Map } from "../components/map-screen/Map";
import { Text, View } from "../components/Themed";
import { useCarStore } from "../stores/useCarStore";
import { RootTabScreenProps } from "../types";

const MapScreen: React.FC = () => {
  const { selectedCar } = useCarStore();

  return (
    <View style={styles.container}>
      {selectedCar && <Map car={selectedCar} />}
      {/* <Text style={styles.title}>Map</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});

export default MapScreen;
