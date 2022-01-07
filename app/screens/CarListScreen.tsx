import React from "react";
import { Button, StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import { RootTabScreenProps } from "../types";

type Car = {
  id: string;
  name: string;
  batteryPercentage: number;
};

type CarCardProps = {
  car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <View style={carCardStyles.carCard}>
      <View style={carCardStyles.content}>
        <View style={carCardStyles.row}>
          <Image
            source={require("../assets/images/tesla-model-x.png")}
            style={{ height: 68, width: 138 }}
          />
        </View>
        <Text style={carCardStyles.name}>{car.name}</Text>
      </View>
    </View>
  );
};

const carCardStyles = StyleSheet.create({
  carCard: {
    backgroundColor: colours.lightestGrey,
    height: 200,
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    // height: 137,
  },
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
  },
});

const CarListScreen = ({ navigation }: RootTabScreenProps<"CarList">) => {
  const cars: Car[] = [
    {
      id: "290290290",
      name: "Andy's Tesla Model X",
      batteryPercentage: 80,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Cars</Text>
        <View style={styles.carContainer}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </View>
        <Button
          title="Car Screen"
          onPress={() => navigation.navigate("Root")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: "wrap",
    // alignItems: "flex-start",
  },
  innerContainer: {
    marginHorizontal: 24,
    marginVertical: 44,
    flex: 1,
  },
  title: {
    marginTop: 24,
    fontSize: 36,
    fontFamily: fonts.bold,
  },
  carContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default CarListScreen;
