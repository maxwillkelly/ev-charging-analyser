import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LogoutScreen from "../screens/settings/LogoutScreen";
import fonts from "../styles/fonts";
import { SettingsTabParamList } from "../types";
import HeaderBackButton from "./HeaderBackButton";

const Stack = createStackNavigator<SettingsTabParamList>();

const SettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Logout"
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
      name="Logout"
      component={LogoutScreen}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
