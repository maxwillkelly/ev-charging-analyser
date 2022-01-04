import React from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Theme } from "react-native-paper/src/types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import color from "color";
import colours from "./styles/colours";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

const queryClient = new QueryClient();

const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: colours.primary,
    accent: "#03dac4",
    background: "#f6f6f6",
    surface: colours.white,
    error: colours.error,
    text: colours.black,
    onSurface: "#000000",
    disabled: color("#000000").alpha(0.26).rgb().string(),
    placeholder: color("#000000").alpha(0.54).rgb().string(),
    backdrop: color("#000000").alpha(0.5).rgb().string(),
    notification: colours.lightestGrey,
  },
  animation: {
    scale: 1.0,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PaperProvider>
      </QueryClientProvider>
    );
  }
}
