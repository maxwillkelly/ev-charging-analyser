/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          // TabOne: {
          //   screens: {
          //     TabOneScreen: "one",
          //   },
          // },
          Car: {
            screens: {
              CarScreen: "car",
            },
          },
          Map: {
            screens: {
              MapScreen: "map",
            },
          },
          Journeys: {
            screens: {
              JourneysScreen: "journeys",
            },
          },
          Charging: {
            screens: {
              ChargingScreen: "charging",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      SmartCarConnect: "smartCarConnect",
      Modal: "modal",
      Login: "login",
      NotFound: "*",
    },
  },
};

export default linking;
