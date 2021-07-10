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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <AppDrawer.Navigator drawerType="back">
      <AppDrawer.Screen
        name="Tabs"
        component={StackFlow}
        options={{ drawerLabel: "Profile" }}
      />

      <AppDrawer.Screen
        name="EventCalendar"
        component={EventCalendar}
        options={{ drawerLabel: "Event Calendar" }}
      />

      <AppDrawer.Screen
        name="Examination"
        component={Examination}
        options={{ drawerLabel: "Examination" }}
      />

      <AppDrawer.Screen
        name="Notifications"
        component={Notifications}
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

function StackFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
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
  );
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