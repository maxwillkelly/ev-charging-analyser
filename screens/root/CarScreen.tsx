import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { RootTabScreenProps } from "../../types";
import { BatteryWidgetVertical } from "../../components/battery-widgets/BatteryWidgetVertical";
import { RangeWidget } from "../../components/car-screen/RangeWidget";
import { LockWidget } from "../../components/car-screen/LockWidget";
import { useCarStore } from "../../stores/useCarStore";

const CarScreen = ({ route }: RootTabScreenProps<"Car">) => {
  const { setSelectedCar } = useCarStore();
  const { car } = route.params;

  useEffect(() => setSelectedCar(car), []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/tesla-model-x.png")}
        style={{ marginTop: 80, height: 162, width: 330 }}
      />
      <Text style={styles.title}>{car.name}</Text>
      <View style={styles.appletContainer}>
        <BatteryWidgetVertical percentRemaining={car.percentRemaining} state={car.state}/>
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
  batteryPercentage: {
    color: colours.white,
    fontFamily: fonts.medium,
    fontSize: 28,
  },
  batteryLevel: {
    backgroundColor: colours.green,
    width: "100%",
    height: "80%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  batteryWidgetVertical: {
    backgroundColor: colours.lightGrey,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardBody: {
    fontFamily: fonts.medium,
    fontSize: 20,
  },
  cardCentred: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colours.lightestGrey,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  active: {
    backgroundColor: colours.primary,
    color: colours.white,
  },
  cardCentredVertical: {
    backgroundColor: colours.lightestGrey,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  line: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 206,
    width: 142,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rightCard: {
    borderRadius: 6,
    margin: 10,
    padding: 10,
    backgroundColor: colours.lightestGrey,
    height: 94,
    width: 177,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  appletContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  leftIcon: {
    marginRight: 30,
  },
});

export default CarScreen;
