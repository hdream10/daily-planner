import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export const getTasksByDate = async (date) => {
  try {
    const isValidFormat = moment(date, "DD-MM-YYYY", true).isValid();
    if (!isValidFormat) date = moment(date).format("DD-MM-YYYY");

    let tasks = await AsyncStorage.getItem(date);
    tasks = tasks ? JSON.parse(tasks) : [];
    return tasks;
  } catch (e) {
    console.log(e);
  }
};
