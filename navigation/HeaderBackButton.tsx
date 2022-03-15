import { Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../styles/colours";

type Props = {
  navigation: any;
  path: string;
};

const HeaderBackButton: React.FC<Props> = ({ navigation, path }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(path)}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <MaterialCommunityIcons
        name="arrow-left"
        size={25}
        color={colours.secondary}
        style={{ marginHorizontal: 15 }}
      />
    </Pressable>
  );
};

export default HeaderBackButton;
