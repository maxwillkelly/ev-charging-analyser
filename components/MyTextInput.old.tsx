import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFormik } from "formik";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginHorizontal: 20,
    marginVertical: 12,
    borderColor: colours.jet,
    borderWidth: 1,
    padding: 12,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});

type Props = {
  label: string;
  fieldName: string;
  formik: typeof useFormik;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const MyTextInput: React.FC<Props> = ({
  label,
  formik,
  fieldName,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={formik.handleChange(fieldName)}
      onBlur={formik.handleBlur(fieldName)}
      value={formik.values[fieldName]}
      placeholder={label}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default MyTextInput;
