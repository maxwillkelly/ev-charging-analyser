import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { AxiosError } from "axios";
import React from "react";
import { StyleSheet, Image, Pressable, ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import { getCarsAsync } from "../api/carApi";
import { CarDto } from "../api/dtos/Car.dto";
import { Text, View } from "../components/Themed";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import { RootStackParamList } from "../types";

type CarCardProps = {
  car: CarDto;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

type BatteryWidgetProps = {
  batteryPercentage: number;
};

const BatteryWidgetHorizontal: React.FC<BatteryWidgetProps> = ({
  batteryPercentage,
}) => {
  return (
    <View style={bwHStyles.card}>
      <View style={bwHStyles.batteryIcon}>
        <View style={bwHStyles.batteryLevel}></View>
      </View>
      <Text style={bwHStyles.percentage}>{batteryPercentage}%</Text>
    </View>
  );
};

const bwHStyles = StyleSheet.create({
  card: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
  },
  batteryIcon: {
    backgroundColor: colours.lightGrey,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 2,
    width: "60%",
  },
  batteryLevel: {
    backgroundColor: colours.green,
    width: "80%",
    height: "100%",
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  percentage: {
    fontFamily: fonts.bold,
    fontSize: 18,
  },
});

const CarCard: React.FC<CarCardProps> = ({ car, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Root")}>
      <View style={carCardStyles.carCard}>
        <View style={carCardStyles.content}>
          <View style={carCardStyles.row}>
            <Image
              source={require("../assets/images/tesla-model-x.png")}
              style={{ height: 68, width: 138 }}
            />
            <BatteryWidgetHorizontal
              batteryPercentage={car.batteryPercentage}
            />
          </View>
          <Text style={carCardStyles.name}>{car.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const carCardStyles = StyleSheet.create({
  carCard: {
    height: 144,
    width: "100%",
    marginVertical: 12,
  },
  content: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    padding: 16,
    borderRadius: 6,
  },
  row: {
    backgroundColor: colours.lightestGrey,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
  },
});

const CarListScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { isLoading, error, data } = useQuery<CarDto[], AxiosError>(
    "cars",
    getCarsAsync
  );

  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error occurred</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </View>
    );

  if (data)
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Cars</Text>
          <View style={styles.carContainer}>
            {data.map((car) => (
              <CarCard key={car.id} car={car} navigation={navigation} />
            ))}
          </View>
        </View>
        <Pressable
          style={{ margin: 16, alignSelf: "flex-end" }}
          onPress={() => navigation.navigate("SmartCarConnect")}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={70}
            color={colours.primary}
          />
        </Pressable>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
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
