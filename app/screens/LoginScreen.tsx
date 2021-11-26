import React from "react";
import { View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginScreen = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View>
      <View>
        <TextInput
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <HelperText
          type="error"
          visible={Boolean(formik.touched.email && formik.errors.email)}
        >
          {formik.errors.email}
        </HelperText>
      </View>
      <View>
        <TextInput
          label="Password"
          placeholder="Enter Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          onBlur={formik.handleBlur("password")}
        />
        <HelperText
          type="error"
          visible={Boolean(formik.touched.password && formik.errors.password)}
        >
          {formik.errors.password}
        </HelperText>
      </View>
      <Button onPress={formik.handleSubmit}>Submit</Button>
    </View>
  );
};

export default LoginScreen;
