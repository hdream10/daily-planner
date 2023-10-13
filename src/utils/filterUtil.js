import moment from "moment";
import { getTasksByDate } from "../service/getTasksByDate";

export const filterUtil = async (value, currentDate) => {
  const formatDate = moment(currentDate).format("DD-MM-YYYY");
  const tasks = await getTasksByDate(formatDate);
  if (value === "None") return tasks;
  
  const filteredTasks = tasks.filter((t) => t.important === value);
  return filteredTasks;
};
