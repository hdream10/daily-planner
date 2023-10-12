import { View } from "react-native";
import TaskCard from "../components/card/TaskCard";
import TaskHeader from "../components/taskHeader/TaskHeader";
import ConfirmationDelete from "../components/ConfirmationDelete/ConfirmationDelete";

const tmpCard = [
  {
    id: 1,
    title: "task 1",
    status: true,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 2,
    title: "task 2",
    status: false,
    important: "Важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 3,
    title: "task 3",
    status: true,
    important: "Не важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 4,
    title: "task 4",
    status: false,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 5,
    title: "task 5",
    status: true,
    important: "Важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 6,
    title: "task 6",
    status: true,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 7,
    title: "task 7",
    status: true,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 8,
    title: "task 8",
    status: true,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
  {
    id: 9,
    title: "task 9",
    status: true,
    important: "Очень важно",
    description: "Задача такая то, такая то",
  },
];
const TaskList = () => {
  return (
    <View>
      <TaskHeader/>
      {tmpCard.map((card) => (
        <TaskCard key={card.id} card={card} />
      ))}
      <ConfirmationDelete/>
    </View>
  );
};

export default TaskList;
