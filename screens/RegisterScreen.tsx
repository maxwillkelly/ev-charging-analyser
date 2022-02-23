import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as yup from "yup";
import { AxiosError } from "axios";
import { RootStackScreenProps } from "../types";
import { registerAsync } from "../api/usersApi";
import { useUserStore } from "../stores/useUserStore";
import { LoginResponse } from "../api/dtos/Login.dto";
import { RegisterDto } from "../api/dtos/Register.dto";
import Title from "../components/Title";
import ButtonGroup from "../components/ButtonGroup";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import colours from "../styles/colours";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegisterScreen = ({ navigation }: RootStackScreenProps<"Register">) => {
  const { login } = useUserStore();

  const mutation = useMutation<LoginResponse, AxiosError, RegisterDto>(
    "userToken",
    registerAsync,
    {
      onSuccess: (dto) => {
        login(dto);
        navigation.navigate("CarList");
      },
      onError: (error) => console.error(error),
    }
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => mutation.mutate(values),
  });

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: colours.white }}
    >
      <Title title="Register" />
      <View style={{ flex: 1 }}>
        <MyTextInput label="First Name" fieldName="firstName" formik={formik} />
        <MyTextInput label="Last Name" fieldName="lastName" formik={formik} />
        <MyTextInput
          label="Email"
          fieldName="email"
          keyboardType="email-address"
          formik={formik}
        />
        <MyTextInput
          label="Password"
          fieldName="password"
          secureTextEntry
          formik={formik}
        />
        <MyTextInput
          label="Confirm Password"
          fieldName="confirmPassword"
          secureTextEntry
          formik={formik}
        />
      </View>
      <ButtonGroup>
        <MyButton onPress={formik.handleSubmit} title="Register" />
        <MyButton
          onPress={() => navigation.goBack()}
          title="Go Back"
          variant="secondary"
        />
      </ButtonGroup>
    </ScrollView>
  );
};

export default RegisterScreen;
