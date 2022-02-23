import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  innerContainer: {
    marginBottom: 32,
    marginHorizontal: 20,
  },
});

const ButtonGroup: React.FC = ({ children }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export default ButtonGroup;
