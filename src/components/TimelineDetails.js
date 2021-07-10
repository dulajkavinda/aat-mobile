import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import user from "../../api/users.json";
import UseDetailRows from "./UseDetailRows";

const TimelineDetails = (props) => {
  return (
    <View>
      <Text style={styles.headline}>Timeline and Level Completion</Text>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.profile_body}>
            <View style={styles.table}>
              <Image
                style={styles.stretch}
                source={require("../../assets/timeline.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
  },
  stretch: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#E1E1E1",
    shadowOffset: { width: 2, height: 1 },
    shadowColor: "rgba(0,0,0, .4)",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  table: {
    display: "flex",
    width: "90%",

    height: 300,

    flexDirection: "column",
    justifyContent: "space-around",
  },
  profile_body: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
});

export default TimelineDetails;
