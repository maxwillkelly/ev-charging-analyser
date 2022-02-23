import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  title: string;
  onPress: () => void;
};

const MyButton: React.FC<Props> = ({ variant, title, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 12,
    },
    button: {
      backgroundColor: variant ? colours[variant] : colours["primary"],
      paddingVertical: 12,
    },
    text: {
      color: colours.white,
      fontFamily: fonts.regular,
      fontSize: 18,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;
