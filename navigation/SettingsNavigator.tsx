import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DisconnectVehicle from "../screens/settings/DisconnectVehicle";
import LogoutScreen from "../screens/settings/LogoutScreen";
import fonts from "../styles/fonts";
import { SettingsTabParamList } from "../types";
import HeaderBackButton from "./HeaderBackButton";
import LocationPermissionsScreen from "../screens/settings/LocationPermissionsScreen";

const Stack = createStackNavigator<SettingsTabParamList>();

const SettingsNavigator = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => ({
      headerTitleStyle: {
        fontFamily: fonts.medium,
      },
      presentation: "modal",
      headerLeft: () => (
        <HeaderBackButton navigation={navigation} path="Root" />
      ),
    })}
  >
    <Stack.Screen
      name="LocationPermissions"
      options={{ title: "Location Services" }}
      component={LocationPermissionsScreen}
    />
    <Stack.Screen name="Logout" component={LogoutScreen} />
    <Stack.Screen name="Disconnect" component={DisconnectVehicle} />
  </Stack.Navigator>
);

export default SettingsNavigator;
