import { View, Image, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileTabView from "./components/ProfileTabView";
import axios from "axios";

export default function Profile(props) {
  const [user, setData] = useState(null);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    axios
      .get("https://aat-backend-api.herokuapp.com/api/user/getUserData")
      .then(function (response) {
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://aat-backend-api.herokuapp.com/api/asset/getAssets")
      .then(function (response) {
        setProfile(response.data[0].profile);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (user === null) {
    return null;
  }
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
                  uri: profile,
                }}
              />
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.info_names}>
              <Text style={styles.nameTxt}>{user.name}</Text>
              <Text style={styles.profile_typeTxt}>{user.type}</Text>
            </View>

            <View style={styles.extra_info}>
              <Text style={styles.extra_infoTxt}>{user.student_id}</Text>
              <Text style={styles.extra_infoTxt}>
                {user.level[2].level_name}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ProfileTabView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  left: {
    display: "flex",
    width: "40%",
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

    flexDirection: "column",
    justifyContent: "space-around",
  },
  profile_body: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  topicTxt: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 15,
  },
  tabbar: {
    display: "flex",
    width: "100%",
    height: 30,

    marginTop: 20,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  tab: {
    display: "flex",
    width: "33.3%",
    height: 30,
    backgroundColor: "#3C6DC9",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabTxt: {
    color: "white",
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
