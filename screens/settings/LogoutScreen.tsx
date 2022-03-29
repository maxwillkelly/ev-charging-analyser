import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../styles/colours";
import fonts from "../../styles/fonts";
import MyButton from "../../components/MyButton";
import useLogout from "../../hooks/useLogout";
import ButtonGroup from "../../components/ButtonGroup";

const LogoutScreen = () => {
  const logout = useLogout();

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="logout"
            size={200}
            color={colours.primary}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>Logout</Text>
          <Text style={styles.description}>
            Are you sure you want to log out of the application?
          </Text>
        </View>
      </View>
      <ButtonGroup>
        <MyButton title="Log out" onPress={logout} />
      </ButtonGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 28,
    marginVertical: 20,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
});

export default LogoutScreen;
