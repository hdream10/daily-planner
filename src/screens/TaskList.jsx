import { View } from "react-native";
import TaskCard from "../components/card/TaskCard";
import TaskHeader from "../components/taskHeader/TaskHeader";
import ConfirmationDelete from "../components/ConfirmationDelete/ConfirmationDelete";
import { useEffect } from "react";
import { getTasksByDate } from "../service/getTasksByDate";
import moment from "moment";
import { useControlTask } from "../store/controlTask.store";
import ConfirmCheck from "../components/ConfirmCheck/ConfirmCheck";

const TaskList = () => {
  const {
    tasks,
    setTasks,
    currentDate,
    clearSearchQueryStore,
    clearSetFilterValue,
  } = useControlTask();

  useEffect(() => {
    clearSetFilterValue();
    clearSearchQueryStore();
    async function getTasks() {
      const date = moment(currentDate).format("DD-MM-YYYY");
      const cards = await getTasksByDate(date);
      setTasks(cards);
    }
    getTasks();
  }, [currentDate]);

  return (
    <View>
      <TaskHeader />
      {tasks &&
        tasks.map((card, index) => <TaskCard key={index} card={card} />)}
      <ConfirmationDelete />
      <ConfirmCheck />
    </View>
  );
};

export default TaskList;
