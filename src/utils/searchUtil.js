import moment from "moment";
import { getTasksByDate } from "../service/getTasksByDate";

export const searchUtil = async (query, currentDate) => {
  const formatDate = moment(currentDate).format("DD-MM-YYYY");
  const tasks = await getTasksByDate(formatDate);
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );
  return filteredTasks;
};
