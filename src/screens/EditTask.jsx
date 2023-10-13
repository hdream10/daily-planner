import { PanResponder, View } from "react-native";
import TaskForm from "../components/taskForm/TaskForm";
import { useControlTask } from "../store/controlTask.store";
import TaskCard from "../components/card/TaskCard";
import { useRef } from "react";

const EditTask = () => {
  const { editScreen, clearEditMode } = useControlTask();
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 150) {
          clearEditMode()
        }
      },
    })
  ).current;

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <TaskCard card={editScreen.task} isDisabled={true} />
      <TaskForm />
    </View>
  );
};

export default EditTask;
