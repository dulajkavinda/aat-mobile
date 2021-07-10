import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HeaderBackButton } from "@react-navigation/stack";

import Profile from "./src/Profile";
import Examination from "./src/Examination";
import Notifications from "./src/Notifications";
import EventCalendar from "./src/EventCalendar";
import ExamResults from "./src/ExamResults";

import StackWrapper from "./src/components/StackWrapper";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <AppDrawer.Navigator drawerType="back">
      <AppDrawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{ drawerLabel: "Profile" }}
      />

      <AppDrawer.Screen
        name="EventCalendar"
        component={EventCalendarStack}
        options={{ drawerLabel: "Event Calendar" }}
      />

      <AppDrawer.Screen
        name="Examination"
        component={ExaminationStack}
        options={{ drawerLabel: "Examination" }}
      />

      <AppDrawer.Screen
        name="Notifications"
        component={NotificationsStack}
        options={{ drawerLabel: "Notifications" }}
      />

      <AppDrawer.Screen
        name="Exam Results"
        component={ExamResults}
        options={{ drawerLabel: "Exam Results" }}
      />
    </AppDrawer.Navigator>
  </NavigationContainer>
);

function ProfileStack() {
  return <StackWrapper componentScreen={Profile} />;
}

function EventCalendarStack() {
  return <StackWrapper componentScreen={EventCalendar} />;
}

function ExaminationStack() {
  return <StackWrapper componentScreen={Examination} />;
}

function NotificationsStack() {
  return <StackWrapper componentScreen={Notifications} />;
}

export default App;

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
