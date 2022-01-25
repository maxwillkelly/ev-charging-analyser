import React from "react";
import OnboardingScreen from "./OnboardingScreen";

const OnboardingLocationScreen: React.FC = () => {
  return (
    <OnboardingScreen
      title="Location Services"
      description="This application requires location services to be enabled in order to function, click on the right arrow to launch the prompt"
    />
  );
};

export default OnboardingLocationScreen;
