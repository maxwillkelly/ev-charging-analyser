import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";

const ChargeItem = () => {
  return (
    <View>
      <MaterialCommunityIcons
        name="ev-station"
        size={24}
        color={colours.primary}
        style={{ padding: 8 }}
      />
      <View>
        <Text>Home (15 Privet Drive)</Text>
        <Text>1:23am - 4:56am</Text>
        <Text>50kWh</Text>
      </View>
      <View>
      <MaterialIcons
        name="arrow-right-alt"
        size={30}
        color={colours.secondary}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChargeItem;
