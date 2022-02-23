import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 24,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 32,
  },
});

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
