import * as React from "react";
import { StyleSheet } from "react-native";
import { Map } from "../../components/map-screen/Map";
import { View } from "../../components/Themed";
import { useCarStore } from "../../stores/useCarStore";

const MapScreen: React.FC = () => {
  const { selectedCar } = useCarStore();

  return (
    <View style={styles.container}>
      {selectedCar && <Map car={selectedCar} />}
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

export default MapScreen;
