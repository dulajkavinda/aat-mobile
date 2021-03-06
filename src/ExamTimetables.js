import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Web } from "react-native-openanything";

const ExamTimetables = () => {
  const [timetable, setTimetable] = useState("");
  const [subjects, setSubjects] = useState("");

  useEffect(() => {
    axios
      .get("https://aat-backend-api.herokuapp.com/api/asset/getAssets")
      .then(function (response) {
        setTimetable(response.data[0].timetable);
        setSubjects(response.data[0].timetable);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const centers = [
    { name: "Ampara", key: 1 },
    { name: "Anuradhapura", key: 2 },
    { name: "Badulla", key: 3 },
    { name: "Batticaloa", key: 4 },
    { name: "Colombo", key: 5 },
    { name: "Galle", key: 6 },
    { name: "Gampaha", key: 7 },
    { name: "Jaffna", key: 8 },
    { name: "Kaluthara", key: 9 },
    { name: "Kandy", key: 10 },
    { name: "Kurunegala", key: 11 },
    { name: "Matara", key: 12 },
    { name: "Polonnaruwa", key: 13 },
    { name: "Ratnapura", key: 14 },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View style={styles.main}>
        <Text style={[styles.text_header, { marginTop: 20 }]}>
          Exam Timetables
        </Text>
        <View style={styles.images}>
          <Image
            source={{
              uri: timetable,
            }}
            style={{ width: 380, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.text_header, { marginTop: 30 }]}>
          Subject Rate
        </Text>
        <View style={styles.images}>
          <Image
            source={{
              uri: subjects,
            }}
            style={{ width: 380, height: 200 }}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            Web(
              "https://aatsl.lk/index.php/en/examination/examination-information"
            )
          }
        >
          <Text style={[styles.text_header, { marginTop: 30 }]}>
            AAT Centers
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text_header: {
    fontSize: 30,
    fontWeight: "400",
    color: "#252D71",
  },
});

export default ExamTimetables;
