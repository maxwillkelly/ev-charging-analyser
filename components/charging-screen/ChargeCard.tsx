import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colours from "../../styles/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../styles/fonts";

const ChargeCard = () => {
  return (
    <Pressable onPress={() => undefined}>
      <View
        style={{
          borderRadius: 6,
          margin: 10,
          padding: 10,
          backgroundColor: colours.lightestGrey,
          height: 90,
          width: 190,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={styles.cardHeading}>Charge</Text>
        <View style={styles.cardCentred}>
          <View style={styles.cardCentredVertical}>
            <MaterialCommunityIcons
              name="power-plug"
              size={36}
              color={colours.secondary}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
  cardCentred: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colours.lightestGrey,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardCentredVertical: {
    backgroundColor: colours.lightestGrey,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ChargeCard;
