import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationPermissionsScreen from "../screens/settings/LocationPermissionsScreen";
import { OnboardingTabParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";

const Step = createBottomTabNavigator<OnboardingTabParamList>();

const StepNavigator: React.FC = () => (
  <Step.Navigator
    initialRouteName="Location"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
    })}
    tabBar={() => null}
    // tabBar={({ navigation }) => <OnboardingSteps navigation={navigation} />
    // screenOptions={({ route, navigation }) => ({
    //   headerTitleStyle: {
    //     fontFamily: fonts.medium,
    //   },
    //   headerLeft: () => (
    //     <Pressable
    //       onPress={() => navigation.navigate("CarList")}
    //       style={({ pressed }) => ({
    //         opacity: pressed ? 0.5 : 1,
    //       })}
    //     >
    //       <MaterialCommunityIcons
    //         name="arrow-left"
    //         size={25}
    //         color={colours.secondary}
    //         style={{ marginHorizontal: 15 }}
    //       />
    //     </Pressable>
    //   ),
    // })}
  >
    <Step.Screen name="Location" component={LocationPermissionsScreen} />
  </Step.Navigator>
);

export default BottomTabNavigator;