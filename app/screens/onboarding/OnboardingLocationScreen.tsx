import React from "react";
import * as Location from "expo-location";
import OnboardingScreen from "../../components/onboarding/OnboardingScreen";
import { RootStackScreenProps } from "../../types";

const OnboardingLocationScreen = ({ navigation }: RootStackScreenProps<"Onboarding">) => {
  const getLocationPermissions = async (): Promise<boolean> => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status === "granted") return true;
    return false;
  };

  const onNextHandler = async () => {
    const permitted = await getLocationPermissions();
    if (permitted) {
      navigation.navigate("CarList");
    }
  }

  return (
    <OnboardingScreen
      title="Location Services"
      description="This application requires location services to be enabled in order to function, click on the right arrow to launch the prompt"
      navigation={navigation}
      onNext={onNextHandler}
    />
  );
};

export default OnboardingLocationScreen;
