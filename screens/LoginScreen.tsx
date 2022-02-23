import React from "react";
import { ScrollView, View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginAsync } from "../api/usersApi";
import { useMutation } from "react-query";
import { LoginDto, LoginResponse } from "../api/dtos/Login.dto";
import { AxiosError } from "axios";
import { RootStackScreenProps } from "../types";
import { useUserStore } from "../stores/useUserStore";
import Title from "../components/Title";
import MyButton from "../components/MyButton";
import ButtonGroup from "../components/ButtonGroup";
import MyTextInput from "../components/MyTextInput";
import colours from "../styles/colours";

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

const LoginScreen = ({ navigation }: RootStackScreenProps<"Login">) => {
  const { login } = useUserStore();

  const mutation = useMutation<LoginResponse, AxiosError, LoginDto>(
    "userToken",
    loginAsync,
    {
      onSuccess: (dto) => {
        login(dto);
        navigation.navigate("CarList");
      },
      onError: (error) => console.error(error),
    }
  );

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => mutation.mutate(values),
  });

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: colours.white }}
    >
      <Title title="Sign In" />
      <View style={{ flex: 1 }}>
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
      </View>
      <ButtonGroup>
        <MyButton onPress={formik.handleSubmit} title="Sign In" />
        <MyButton
          onPress={() => navigation.navigate("Register")}
          title="Register"
          variant="secondary"
        />
      </ButtonGroup>
    </ScrollView>
  );
};

export default LoginScreen;
