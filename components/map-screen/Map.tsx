import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import MapView, { LatLng, Marker as MapMarker } from "react-native-maps";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import { getCarLocationAsync } from "../../api/carsApi";
import { useQuery } from "react-query";
import { useUserStore } from "../../stores/useUserStore";
import { AxiosError } from "axios";
import { View, Text } from "../Themed";
import { CarDto } from "../../api/dtos/Attributes.dto";
import { useLocationStore } from "../../stores/LocationStore";

const INITIAL_REGION = {
  latitude: 56.46855061730443,
  longitude: -2.994651893483153,
  latitudeDelta: 0.12,
  longitudeDelta: 0.12,
};

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

type Props = {
  car: CarDto;
};

export const Map: React.FC<Props> = ({ car }) => {
  const [userCoordinates, setUserCoordinates] = useState<LatLng>();
  const { lastLocation } = useLocationStore();

  useEffect(() => {
    if (!lastLocation) return;

    const { coords } = lastLocation;
    const { latitude, longitude } = coords;

    setUserCoordinates({ latitude, longitude });
  }, [lastLocation]);

  const { isLoading, error, data } = useQuery<LatLng, AxiosError>(
    "carLocation",
    () => getCarLocationAsync(smartCarToken?.accessToken),
    {
      enabled: !!smartCarToken?.accessToken,
    }
  );

  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error occurred</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </View>
    );

  return (
    <MapView
      style={styles.map}
      initialRegion={INITIAL_REGION}
      mapType="standard"
    >
      {userCoordinates && (
        <MapMarker coordinate={userCoordinates} title="I am here">
          <MapMarkerIcon description="Person" />
        </MapMarker>
      )}
      {data && (
        <MapMarker coordinate={data} title={car.name}>
          <MapMarkerIcon description="Car" />
        </MapMarker>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
