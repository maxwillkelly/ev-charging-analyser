import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import MapView, { LatLng, Marker as MapMarker } from "react-native-maps";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import { getCarLocationAsync } from "../../api/carsApi";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { View } from "../Themed";
import { Car } from "../../api/dtos/Car.dto";
import { useLocationStore } from "../../stores/useLocationStore";
import { useUserStore } from "../../stores/useUserStore";
import { useCarStore } from "../../stores/useCarStore";
import ErrorToast from "../ErrorToast";

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
  car: Car;
};

export const Map: React.FC<Props> = ({ car }) => {
  const [userCoordinates, setUserCoordinates] = useState<LatLng>();
  const { selectedCar } = useCarStore();
  const { lastLocation } = useLocationStore();
  const { user } = useUserStore();

  const userId = user?.id as string;
  const vehicleId = selectedCar?.id as string;

  useEffect(() => {
    if (!lastLocation) return;

    const { coords } = lastLocation;

    setUserCoordinates({ ...coords });
  }, [lastLocation]);

  const { isLoading, error, data } = useQuery<LatLng, AxiosError>(
    "carLocation",
    () => getCarLocationAsync({ userId, vehicleId }),
    {
      enabled: !!userId && !!vehicleId,
    }
  );

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colours.secondary} />
      </View>
    );

  if (error) return <ErrorToast message={error.message} />;

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
