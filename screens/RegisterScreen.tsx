import React from "react";
import { View } from "react-native";
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
    <View style={{ flex: 1 }}>
      <Title title="Register" />
      <View>
        <View>
          <TextInput
            label="First Name"
            value={formik.values.firstName}
            onChangeText={formik.handleChange("firstName")}
            onBlur={formik.handleBlur("firstName")}
            autoComplete
          />
          <HelperText
            type="error"
            visible={Boolean(
              formik.touched.firstName && formik.errors.firstName
            )}
          >
            {formik.errors.firstName}
          </HelperText>
        </View>
        <View>
          <TextInput
            label="Last Name"
            value={formik.values.lastName}
            onChangeText={formik.handleChange("lastName")}
            onBlur={formik.handleBlur("lastName")}
            autoComplete
          />
          <HelperText
            type="error"
            visible={Boolean(formik.touched.lastName && formik.errors.lastName)}
          >
            {formik.errors.lastName}
          </HelperText>
        </View>
        <View>
          <TextInput
            label="Email"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            autoComplete
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
            autoComplete={false}
            secureTextEntry
          />
          <HelperText
            type="error"
            visible={Boolean(formik.touched.password && formik.errors.password)}
          >
            {formik.errors.password}
          </HelperText>
        </View>
        <View>
          <TextInput
            label="Confirm Password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange("confirmPassword")}
            error={
              formik.touched.password && Boolean(formik.errors.confirmPassword)
            }
            onBlur={formik.handleBlur("confirmPassword")}
            autoComplete={false}
            secureTextEntry
          />
          <HelperText
            type="error"
            visible={Boolean(
              formik.touched.confirmPassword && formik.errors.confirmPassword
            )}
          >
            {formik.errors.confirmPassword}
          </HelperText>
        </View>
      </View>
      <ButtonGroup>
        <MyButton onPress={formik.handleSubmit} title="Register" />
        <MyButton
          onPress={() => navigation.goBack()}
          title="Go Back"
          variant="secondary"
        />
      </ButtonGroup>
    </View>
  );
};

export default RegisterScreen;
