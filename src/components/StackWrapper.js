import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const StackWrapper = ({ componentScreen, name }) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={componentScreen}
        options={{
          headerStyle: { backgroundColor: "#1E62AD" },
          headerTintColor: "white",
          headerLeft: (props) => (
            <View>
              <Icon
                onPress={() => navigation.openDrawer()}
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
                onPress={() => navigation.navigate("Profile")}
                color="white"
                type="ionicon"
                name={
                  Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"
                }
              />
              <Icon
                onPress={() => navigation.navigate("Notifications")}
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
};

export default StackWrapper;

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
