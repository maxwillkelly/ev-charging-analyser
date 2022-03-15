import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import React from "react";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../styles/fonts";
import { ChargeState } from "../../api/dtos/Car.dto";
import { useCarStore } from "../../stores/useCarStore";
import { useMutation, useQueryClient } from "react-query";
import { CarActionDto, CarActionResponse } from "../../api/dtos/CarAction.dto";
import { AxiosError } from "axios";
import { startChargingAsync, stopChargingAsync } from "../../api/carsApi";
import { useUserStore } from "../../stores/useUserStore";

const ChargeCard = () => {
  const { selectedCar } = useCarStore();
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  const startChargingMutation = useMutation<
    CarActionResponse,
    AxiosError,
    CarActionDto
  >("startCharging", startChargingAsync, {
    onSuccess: () => queryClient.invalidateQueries("cars"),
  });

  const stopChargingMutation = useMutation<
    CarActionResponse,
    AxiosError,
    CarActionDto
  >("stopCharging", stopChargingAsync, {
    onSuccess: () => queryClient.invalidateQueries("cars"),
  });

  if (!selectedCar) return null;

  const { state } = selectedCar;

  const getChargeActionString = (chargeState: ChargeState) => {
    switch (chargeState) {
      case "CHARGING":
        return "Stop Charging";
      case "NOT_CHARGING":
        return "Charge";
      default:
        return "Disabled";
    }
  };

  const chargeActionString = getChargeActionString(state);

  const onPressFunction = async (_event: GestureResponderEvent) => {
    const variables = {
      userId: user?.id as string,
      vehicleId: selectedCar.id,
    };

    switch (state) {
      case "CHARGING":
        await stopChargingMutation.mutateAsync(variables);
        break;
      case "NOT_CHARGING":
        await startChargingMutation.mutateAsync(variables);
        break;
      default:
        return;
    }
  };

  return (
    <Pressable onPress={onPressFunction}>
      <View
        style={{
          borderRadius: 6,
          margin: 10,
          padding: 10,
          backgroundColor:
            state === "CHARGING" ? colours.primary : colours.lightestGrey,
          height: 90,
          width: 190,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fonts.semiBold,
            fontSize: 16,
            color: state === "CHARGING" ? colours.white : colours.black,
          }}
        >
          {chargeActionString}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor:
              state === "CHARGING" ? colours.primary : colours.lightestGrey,
            alignContent: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor:
                state === "CHARGING" ? colours.primary : colours.lightestGrey,
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {state === "CHARGING" ? (
              <MaterialCommunityIcons
                name="power-plug-off"
                size={36}
                color={colours.white}
              />
            ) : (
              <MaterialCommunityIcons
                name="power-plug"
                size={36}
                color={colours.secondary}
              />
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ChargeCard;
