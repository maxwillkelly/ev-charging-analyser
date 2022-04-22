import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import fonts from "../../styles/fonts";
import { RootTabScreenProps } from "../../types";
import { BatteryWidgetVertical } from "../../components/battery-widgets/BatteryWidgetVertical";
import { RangeWidget } from "../../components/car-screen/RangeWidget";
import { LockWidget } from "../../components/car-screen/LockWidget";
import { useCarStore } from "../../stores/useCarStore";

const CarScreen = ({ route, navigation }: RootTabScreenProps<"Car">) => {
  const { setSelectedCar } = useCarStore();

  useEffect(() => {
    if (!route) navigation.navigate("CarList");
  }, []);

  useEffect(() => {
    route.params?.car && setSelectedCar(route.params.car);
  }, []);

  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/tesla-model-x.png")}
        style={{ marginTop: 80, height: 162, width: 330 }}
      />
      <Text style={styles.title}>{car.name}</Text>
      <View style={styles.appletContainer}>
        <BatteryWidgetVertical
          percentRemaining={car.percentRemaining}
          state={car.state}
        />
        <View>
          <RangeWidget range={car.range} />
          <LockWidget />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    marginVertical: 20,
  },
  appletContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default CarScreen;
