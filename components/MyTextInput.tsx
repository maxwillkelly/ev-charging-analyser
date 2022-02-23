import React from "react";
import { KeyboardTypeOptions, StyleSheet, View } from "react-native";
import colours from "../styles/colours";
import fonts from "../styles/fonts";
import { TextInput, HelperText } from "react-native-paper";

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    fontSize: 16,
    backgroundColor: colours.white,
  },
  helperText: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});

type Props = {
  label: string;
  fieldName: string;
  formik: Record<string, any>;
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
  const visible = Boolean(
    formik.touched[fieldName] && formik.errors[fieldName]
  );

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        label={label}
        mode="outlined"
        onChangeText={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        value={formik.values[fieldName]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
      <HelperText type="error" visible={visible} style={styles.helperText}>
        {formik.errors[fieldName]}
      </HelperText>
    </View>
  );
};

export default MyTextInput;
