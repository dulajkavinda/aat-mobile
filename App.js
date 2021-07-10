import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HeaderBackButton } from "@react-navigation/stack";

import Profile from "./src/Profile";
import Examination from "./src/Examination";
import Notifications from "./src/Notifications";
import EventCalendar from "./src/EventCalendar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Examination"
          component={EventCalendar}
          options={{
            headerStyle: { backgroundColor: "#1E62AD" },
            headerTintColor: "white",
            headerLeft: (props) => (
              <View>
                <Icon
                  containerStyle={styles.icon}
                  color="white"
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                />
              </View>
            ),
            headerRight: (props) => (
              <View style={styles.iconContainer}>
                <Icon
                  color="white"
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"
                  }
                />
                <Icon
                  color="white"
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-notifications"
                      : "md-notifications"
                  }
                />
                <Icon
                  color="white"
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-ellipsis-vertical"
                      : "md-ellipsis-vertical"
                  }
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});
