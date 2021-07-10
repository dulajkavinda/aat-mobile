import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Icon } from "react-native-elements";
const EventCalendar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.year}>{new Date().getFullYear()}</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
      </View>
      <View style={styles.calendar_wrapper}>
        <View style={styles.calendar}>
          <Calendar
            style={{
              borderRadius: 20,
              height: 318,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 5,
            }}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "black",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "black",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "black",
              indicatorColor: "black",
              textDayFontWeight: "300",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
        <View style={styles.bottom_top}>
          <View style={styles.txt_wrapper}>
            <View>
              <Text style={styles.bottom_top_Txt}>Today Plans</Text>
              <Text style={styles.bottom_top_Txt}>
                8.00 - 10.00 A.M Account Online Lecture
              </Text>
            </View>

            <Icon
              containerStyle={styles.icon}
              color="black"
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-location" : "md-location"}
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.txt_wrapper_bottom}>
            <Text style={styles.bottom_top_Txt}>Upcomming Plans (2)</Text>
          </View>
          <View style={styles.sub_bottom}>
            <View style={styles.blue_btn}>
              <Icon
                containerStyle={styles.icon}
                color="black"
                type="feather"
                name={Platform.OS === "ios" ? "book" : "book"}
              />
              <Text style={styles.color_btn_txt}>
                Final Examination 04 - April - 2021
              </Text>
            </View>
            <View style={styles.pink_btn}>
              <Icon
                containerStyle={styles.icon}
                color="black"
                type="feather"
                name={Platform.OS === "ios" ? "award" : "award"}
              />
              <Text style={styles.color_btn_txt}>Award Ceremony</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  txt_wrapper_bottom: {
    marginLeft: 10,
  },
  sub_bottom: {
    display: "flex",
    height: "80%",
    width: "100%",

    justifyContent: "space-around",
    alignItems: "center",

    flexDirection: "column",
  },
  blue_btn: {
    width: "80%",
    height: 35,
    backgroundColor: "#4175D0",

    borderRadius: 20,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    flexDirection: "row",
  },
  color_btn_txt: {
    color: "white",
    fontSize: 13,
    marginRight: 10,
  },
  pink_btn: {
    width: "80%",
    height: 35,
    backgroundColor: "#D93DA6",

    borderRadius: 20,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    flexDirection: "row",
  },
  txt_wrapper: {
    marginLeft: 10,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottom_top_Txt: {
    color: "white",
  },
  header: {
    backgroundColor: "#2173C5",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    height: 100,

    flexDirection: "column",

    padding: 10,
  },
  bottom: {
    backgroundColor: "#445DC1",
    display: "flex",
    width: "90%",
    flexDirection: "column",
    marginTop: 20,
    height: 140,
    borderRadius: 25,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,

    padding: 5,
  },
  bottom_top: {
    backgroundColor: "#2173C5",
    display: "flex",
    width: "90%",
    flexDirection: "row",
    marginTop: 20,
    height: 70,
    borderRadius: 25,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,

    padding: 5,
  },
  calendar: {
    marginBottom: 10,
    display: "flex",
    width: "90%",
    height: 300,
  },
  calendar_wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    paddingLeft: 10,
  },
  year: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },

  date: {
    fontSize: 20,
    color: "white",
  },
});
