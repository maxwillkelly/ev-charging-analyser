import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colours";
import useColourScheme from "../hooks/useColourScheme";
import fonts from "../styles/fonts";
import { RootTabParamList } from "../types";

import HeaderBackButton from "./HeaderBackButton";

import CarScreen from "../screens/root/CarScreen";
import ChargingScreen from "../screens/root/ChargingScreen";
// import JourneysScreen from "../screens/root/JourneysScreen";
import MapScreen from "../screens/root/MapScreen";
import SettingsScreen from "../screens/root/SettingsScreen";

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
      {/* <BottomTab.Screen
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
      /> */}
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

export default BottomTabNavigator;
