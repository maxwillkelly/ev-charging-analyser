import React from "react";
import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import fonts from "../styles/fonts";

import LoginScreen from "../screens/LoginScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SmartCarConnect from "../screens/SmartCarConnect";
import CarListScreen from "../screens/CarListScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChargeHistoryScreen from "../screens/ChargeHistoryScreen";

import HeaderBackButton from "./HeaderBackButton";

import BottomTabNavigator from "./BottomTabNavigator";
import StepNavigator from "./StepNavigator";

type Props = {
  colorScheme: ColorSchemeName;
};

const Navigation: React.FC<Props> = ({ colorScheme }) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => ({
      headerTitleStyle: {
        fontFamily: fonts.medium,
      },
      headerLeft: () => (
        <HeaderBackButton navigation={navigation} path="Root" />
      ),
    })}
  >
    <Stack.Screen
      name="CarList"
      component={CarListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChargingHistory"
      component={ChargeHistoryScreen}
      options={{ title: "Charging History" }}
    />
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Onboarding"
      component={StepNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: "Oops!" }}
    />
    <Stack.Screen
      name="SmartCarConnect"
      component={SmartCarConnect}
      options={{ title: "Connect Car" }}
    />
  </Stack.Navigator>
);

export default Navigation;
