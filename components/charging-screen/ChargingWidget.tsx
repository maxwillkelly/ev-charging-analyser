import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChargingWidget = () => {
  return (
    <View>
      <View
        style={{
          width: 160,
          height: 160,
          borderRadius: 160 / 2,
          borderWidth: 10,
          borderColor: colours.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 48,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={24}
          color={colours.green}
          style={{
            position: "absolute",
            zIndex: 10,
            alignSelf: "flex-start",
            margin: 20
          }}
        />
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            borderWidth: 2,
            borderColor: colours.green,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 36,
              fontFamily: fonts.semiBold,
            }}
          >
            80%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChargingWidget;
