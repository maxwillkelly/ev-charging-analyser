import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import colours from "../styles/colours";

const Spinner = () => (
  <Modal>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={colours.secondary} />
    </View>
  </Modal>
);

export default Spinner;
