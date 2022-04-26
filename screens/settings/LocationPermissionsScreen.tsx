import React from "react";
import OnboardingScreen from "../../components/onboarding/OnboardingScreen";
import { RootStackScreenProps } from "../../types";
import { getLocationPermissions } from "../../services/Location";

const LocationPermissionsScreen = ({ navigation }: RootStackScreenProps<"Onboarding">) => {
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

export default LocationPermissionsScreen;
