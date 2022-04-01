import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import MyButton from "../../components/MyButton";
import ButtonGroup from "../../components/ButtonGroup";
import { disconnectCarAsync } from "../../api/carsApi";
import { Meta } from "../../api/dtos/Meta.dto";
import { CarActionDto } from "../../api/dtos/CarAction.dto";
import { AxiosError } from "axios";
import { useUserStore } from "../../stores/useUserStore";
import { useCarStore } from "../../stores/useCarStore";
import { RootStackScreenProps } from "../../types";

const DisconnectVehicle = ({
  navigation,
}: RootStackScreenProps<"SettingsRoot">) => {
  const { user } = useUserStore();
  const { selectedCar } = useCarStore();
  const queryClient = useQueryClient();

  const mutation = useMutation<Meta, AxiosError, CarActionDto>(
    "disconnect",
    disconnectCarAsync,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("cars");
        navigation.navigate("CarList");
      },
    }
  );

  const handleDisconnect = async () => {
    if (!user || !selectedCar) return;

    return await mutation.mutateAsync({
      userId: user?.id,
      vehicleId: selectedCar?.id,
    });
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="logout"
            size={200}
            color={colours.primary}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>Disconnect</Text>
          <Text style={styles.description}>
            Are you sure you want to disconnect your vehicle
          </Text>
        </View>
      </View>
      <ButtonGroup>
        <MyButton title="Disconnect vehicle" onPress={handleDisconnect} />
      </ButtonGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 28,
    marginVertical: 20,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
});

export default DisconnectVehicle;
