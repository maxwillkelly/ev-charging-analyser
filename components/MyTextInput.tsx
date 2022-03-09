import React, { Dispatch, SetStateAction } from "react";
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
  additionalError?: string;
  setAdditionalError?: Dispatch<SetStateAction<string | undefined>>;
  showAdditionalError?: boolean;
};

const MyTextInput: React.FC<Props> = ({
  label,
  formik,
  fieldName,
  keyboardType,
  secureTextEntry,
  additionalError,
  setAdditionalError,
  showAdditionalError,
}) => {
  const errorVisible = Boolean(
    formik.touched[fieldName] && (formik.errors[fieldName] || additionalError)
  );

  const errorMessage = formik.errors[fieldName] || additionalError;

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        label={label}
        mode="outlined"
        onChangeText={formik.handleChange(fieldName)}
        onChange={() => {
          if (setAdditionalError) setAdditionalError(undefined);
        }}
        onBlur={formik.handleBlur(fieldName)}
        value={formik.values[fieldName]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        error={errorVisible}
      />
      <HelperText type="error" visible={errorVisible} style={styles.helperText}>
        {showAdditionalError && errorMessage}
      </HelperText>
    </View>
  );
};

export default MyTextInput;
