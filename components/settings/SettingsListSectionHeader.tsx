import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";

type Props = {
  title: string;
};

const SettingsListSectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 4,
      }}
    >
      <Text style={{ fontFamily: fonts.semiBold, fontSize: 14, marginLeft: 8 }}>
        {title}
      </Text>
    </View>
  );
};

export default SettingsListSectionHeader;

const styles = StyleSheet.create({});
