import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";

export const postTask = async (newTask) => {
  try {
    const isValidFormat = moment(newTask.date, "DD-MM-YYYY", true).isValid();
    if (!isValidFormat)
      newTask.date = moment(newTask.date).format("DD-MM-YYYY");
    let currentTasks = await AsyncStorage.getItem(newTask.date);
    currentTasks = currentTasks ? JSON.parse(currentTasks) : [];
    const isMatch = currentTasks.some((t) => t.id === newTask.id);
    let updatedTasks = [];

    if (isMatch) {
      updatedTasks = currentTasks.map((t) => {
        if (t.id === newTask.id) {
          return newTask;
        }
        return t;
      });
    } else {
      updatedTasks = [...currentTasks, newTask];
    }
    await AsyncStorage.setItem(newTask.date, JSON.stringify(updatedTasks));

    return updatedTasks;
  } catch (e) {
    console.log(e);
  }
};