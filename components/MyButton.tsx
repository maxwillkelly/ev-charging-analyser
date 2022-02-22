import React from "react";
import { StyleSheet, Button, View } from "react-native";

type Props = {
  variant: "primary" | "secondary";
  title: string;
  onPress: () => void;
};

const MyButton: React.FC<Props> = ({ variant, title, onPress }) => {
  return <Button onPress={onPress} title={title} />;
};

export default MyButton;

const styles = StyleSheet.create({});
