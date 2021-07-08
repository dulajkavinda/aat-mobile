import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
export default function UseDetailRows(props) {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={[styles.left, {width: `${props.left}`}]}>
          <View style={styles.row}>
            <Text>{props.name}</Text>
            <Text>:</Text>
          </View>
        </View>
        <View style={[styles.right,{width: `${props.right}`}]}>
          <View style={styles.data}>
            <Text style={styles.dataTxt}>{props.data}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  left: {
    display: "flex"
  },
  dataTxt: {
    fontSize: 13.5,
  },
  right: {
    display: "flex",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  data: {
    marginLeft: 10,
  },
  table: {
    display: "flex",
    width: "90%",

    backgroundColor: "#E1E1E1",
    height: 300,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,

    padding: 20,

    flexDirection: "row",
  },
});
