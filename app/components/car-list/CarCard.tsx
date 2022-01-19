import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewCarDto } from "../../api/dtos/Attributes.dto";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { RootStackParamList } from "../../types";
import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { BatteryWidgetHorizontal } from "./BatteryWidgetHorizontal";

type CarCardProps = {
  car: NewCarDto;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const styles = StyleSheet.create({
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

export const CarCard: React.FC<CarCardProps> = ({ car, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Root", { screen: "Car", params: { car } })
      }
    >
      <View style={styles.carCard}>
        <View style={styles.content}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/images/tesla-model-x.png")}
              style={{ height: 68, width: 138 }}
            />
            <BatteryWidgetHorizontal percentRemaining={car.percentRemaining} />
          </View>
          <Text style={styles.name}>{car.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};
