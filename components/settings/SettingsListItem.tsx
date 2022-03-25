import React from "react";
import { Setting } from "../../screens/root/SettingsScreen";
import { Text } from "../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import { Pressable } from "react-native";

type Props = {
  item: Setting;
  isFirstElement: boolean;
  isLastElement: boolean;
};

const SettingsListItem: React.FC<Props> = ({
  item,
  isFirstElement,
  isLastElement,
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
    >
      <Text style={{ fontFamily: fonts.regular, fontSize: 14, padding: 12 }}>
        {item.title}
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} />
    </Pressable>
  );
};

export default SettingsListItem;
