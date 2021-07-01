import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Homes() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: { backgroundColor: "#1E62AD" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
