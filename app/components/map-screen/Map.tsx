import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { LatLng, Marker as MapMarker } from "react-native-maps";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";

type Marker = {
  id: string;
  coordinate: LatLng;
  title: string;
  description: string;
};

const markers: Marker[] = [
  {
    id: "1",
    coordinate: {
      latitude: 56.46855061730443,
      longitude: -2.994651893483153,
    },
    title: "2019 JAGUAR I-Pace",
    description: "Car",
  },
  {
    id: "2",
    coordinate: {
      latitude: 56.47055061730443,
      longitude: -2.994651893483153,
    },
    title: "I am here",
    description: "Person",
  },
];

type MapMarkerIconProps = {
  description: string;
};

export const MapMarkerIcon: React.FC<MapMarkerIconProps> = ({
  description,
}) => {
  switch (description) {
    case "Person":
      return (
        <MaterialIcons name="person-pin" size={32} color={colours.primary} />
      );
  }

  return (
    <MaterialCommunityIcons name="car-hatchback" size={32} color="black" />
  );
};

export const Map: React.FC = () => {
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
    >
      {markers.map((m) => (
        <MapMarker
          key={m.id}
          coordinate={m.coordinate}
          title={m.title}
          // description={m.description}
        >
          <MapMarkerIcon description={m.description} />
        </MapMarker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
