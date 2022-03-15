import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colours";
import useColourScheme from "../hooks/useColourScheme";
import LoginScreen from "../screens/LoginScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SmartCarConnect from "../screens/SmartCarConnect";
import CarScreen from "../screens/root/CarScreen";
import {
  OnboardingTabParamList,
  RootStackParamList,
  RootTabParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MapScreen from "../screens/root/MapScreen";
import JourneysScreen from "../screens/root/JourneysScreen";
import ChargingScreen from "../screens/root/ChargingScreen";
import SettingsScreen from "../screens/root/SettingsScreen";
import fonts from "../styles/fonts";
import CarListScreen from "../screens/CarListScreen";
import OnboardingLocationScreen from "../screens/onboarding/OnboardingLocationScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChargeHistoryScreen from "../screens/ChargeHistoryScreen";
import HeaderBackButton from "./HeaderBackButton";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
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
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
  const colorScheme = useColourScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Car"
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitleStyle: {
          fontFamily: fonts.medium,
        },
        headerLeft: () => (
          <HeaderBackButton navigation={navigation} path="CarList" />
        ),
      })}
    >
      <BottomTab.Screen
        name="Car"
        component={CarScreen}
        options={{
          title: "Car",
          tabBarLabel: "Car",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Journeys"
        component={JourneysScreen}
        options={{
          title: "Journeys",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-path"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Charging"
        component={ChargingScreen}
        options={{
          title: "Charging",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car-cog" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

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
    <Step.Screen name="Location" component={OnboardingLocationScreen} />
  </Step.Navigator>
);
