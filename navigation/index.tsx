import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

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
import colours from "../styles/colours";
import CarListScreen from "../screens/CarListScreen";
import OnboardingLocationScreen from "../screens/onboarding/OnboardingLocationScreen";

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarList"
        component={CarListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
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
          <Pressable
            onPress={() => navigation.navigate("CarList")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              color={colours.secondary}
              style={{ marginHorizontal: 15 }}
            />
          </Pressable>
        ),
      })}
    >
      <BottomTab.Screen
        name="Car"
        component={CarScreen}
        options={{
          title: "Andy's Tesla Model X",
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

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = (props) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
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
