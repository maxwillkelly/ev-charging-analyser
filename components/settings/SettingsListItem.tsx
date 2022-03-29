import React from "react";
import { Setting } from "../../screens/root/SettingsScreen";
import { Text } from "../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { Pressable } from "react-native";
import useLogout from "../../hooks/useLogout";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList, RootTabParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  item: Setting;
  isFirstElement: boolean;
  isLastElement: boolean;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Settings">,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

const SettingsListItem: React.FC<Props> = ({
  item,
  isFirstElement,
  isLastElement,
  navigation,
}) => {
  return (
    <Pressable
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: colours.lightestGrey,
        marginHorizontal: 8,
        borderTopLeftRadius: isFirstElement ? 6 : 0,
        borderTopRightRadius: isFirstElement ? 6 : 0,
        borderBottomLeftRadius: isLastElement ? 6 : 0,
        borderBottomRightRadius: isLastElement ? 6 : 0,
      }}
      onPress={() => navigation.navigate("SettingsRoot", { screen: item.route })}
    >
      <Text style={{ fontFamily: fonts.regular, fontSize: 14, padding: 12 }}>
        {item.title}
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} />
    </Pressable>
  );
};

export default SettingsListItem;
