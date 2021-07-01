import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profile_wrapper}>
        <View style={styles.profile}>
          <View style={styles.image}>
            <View style={styles.profile_image}>
              <Image
                style={{
                  display: "flex",
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                }}
                source={{
                  uri: "https://image.shutterstock.com/z/stock-vector-female-graduate-student-profile-icon-with-gown-and-cap-flat-style-vector-eps-1292081770.jpg",
                }}
              />
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.info_names}>
              <Text style={styles.nameTxt}>Marvin McKinney</Text>
              <Text style={styles.profile_typeTxt}>Student</Text>
            </View>

            <View style={styles.extra_info}>
              <Text style={styles.extra_infoTxt}>S15049</Text>
              <Text style={styles.extra_infoTxt}>Level III</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    height: 135,
    backgroundColor: "#2173C5",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    display: "flex",
    backgroundColor: "#2173C5",
    height: 135,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    backgroundColor: "#2173C5",
    height: 135,
    width: "100%",
    paddingTop: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingRight: 20,
  },
  nameTxt: {
    fontSize: 23,
    color: "white",
  },
  profile_typeTxt: {
    marginTop: 2,
    fontSize: 18,
  },
  extra_info: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  extra_infoTxt: {
    color: "white",
  },
  profile_image: {
    display: "flex",
    backgroundColor: "gray",
    height: 150,
    width: 150,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

    backgroundColor: "green",
    position: "absolute",
    top: -7,
    left: 5,
  },
});
