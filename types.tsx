/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Car } from "./api/dtos/Car.dto";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  Onboarding: NavigatorScreenParams<OnboardingTabParamList>;
  SettingsRoot: NavigatorScreenParams<SettingsTabParamList>;
  ChargingHistory: undefined;
  ChargingSchedule: undefined;
  CarList: undefined;
  SmartCarConnect: undefined;
  Vehicle: undefined;
  Modal: undefined;
  NotFound: undefined;
  Login: undefined;
  Register: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Car: { car: Car };
  Map: { car: Car };
  Journeys: { car: Car };
  Charging: { car: Car };
  Settings: { car: Car };
};

export type OnboardingTabParamList = {
  Location: undefined;
};

export type SettingsTabParamList = {
  TyrePressures: undefined;
  VehicleInformation: undefined;
  Logout: undefined;
  Disconnect: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
