import React from "react";
import { View, Linking, ScrollView } from "react-native";

import ExamContentButton from "./components/ExamContentButton";

import { useNavigation } from "@react-navigation/native";

const Examination = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <ExamContentButton
          text="Time Table"
          color="#793CAB"
          onPress={() => navigation.navigate("Exam Timetables")}
        />
        <ExamContentButton
          text="Subject Rates"
          color="#634FB6"
          onPress={() => navigation.navigate("Exam Timetables")}
        />
        <ExamContentButton
          text="Application Issuing & Closing"
          color="#4169C6"
          onPress={ ()=>{ Linking.openURL('https://www.aatsl.lk/index.php/en/examination/examination-information')}}
        />
        <ExamContentButton
          text="Past Papers & Syllabus"
          color="#1D87D9"
          onPress={() => navigation.navigate("Past Papers")}
        />
        <ExamContentButton
          text="Exam Results"
          color="#1C70BC"
          onPress={() => navigation.navigate("Exam Results")}
        />
        <ExamContentButton
          text="Centers"
          color="#214E96"
          onPress={ ()=>{ Linking.openURL('https://www.aatsl.lk/index.php/en/examination/examination-information')}}
        />
      </ScrollView>
    </View>
  );
};

export default Examination;
