import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export const deleteTask = async (task) => {
  try {
    const isValidFormat = moment(task.date, "DD-MM-YYYY", true).isValid();
    if (!isValidFormat) task.date = moment(task.date).format("DD-MM-YYYY");

    let tasks = await AsyncStorage.getItem(task.date);
    tasks = tasks ? JSON.parse(tasks) : [];
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    await AsyncStorage.setItem(task.date, JSON.stringify(updatedTasks));

    return updatedTasks;
  } catch (e) {
    console.log(e);
  }
};
