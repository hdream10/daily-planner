import { useEffect, useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  RadioButton,
  Text,
  Button,
  Portal,
  Dialog,
  HelperText,
} from "react-native-paper";
import { useControlTask } from "../../store/controlTask.store";
import { taskFormStyles } from "./taskFormStyles";
import { postTask } from "../../service/postTask";

const TaskForm = () => {
  const { editScreen, clearEditMode, editTaskCurrent, setTasks } =
    useControlTask();
  const [taskName, setTaskName] = useState(editScreen.task.title);
  const [description, setDescription] = useState(editScreen.task.description);
  const [priority, setPriority] = useState(editScreen.task.important);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = async () => {
    setVisible(false);
    const cards = await postTask(editScreen.task);
    setTasks(cards)
    clearEditMode();
  };

  const cancelSaveHandler = () => {
    setVisible(false);
  };

  const handleTaskNameChange = (text) => {
    if (taskName.trim() !== "") setError(false);
    setTaskName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  useEffect(() => {
    editTaskCurrent({
      title: taskName,
      description: description,
      important: priority,
    });
  }, [taskName, description, priority]);

  const handleSubmit = () => {
    if (taskName.trim() === "") {
      setError(true);
      return;
    }
    showDialog();
    setError("");
  };

  return (
    <View>
      {error && (
        <HelperText type="error" visible={error}>
          Поле "Название" не может быть пустым
        </HelperText>
      )}
      <TextInput
        label="Название"
        value={taskName}
        onChangeText={handleTaskNameChange}
        style={taskFormStyles.input}
      />

      <TextInput
        label="Описание"
        value={description}
        onChangeText={handleDescriptionChange}
        multiline
        style={taskFormStyles.input}
      />

      <Text style={taskFormStyles.label}>Приоритет:</Text>

      <View style={taskFormStyles.radioGroup}>
        <RadioButton.Group
          onValueChange={handlePriorityChange}
          value={priority}
        >
          <View style={taskFormStyles.radioButton}>
            <RadioButton value="Не важно" />
            <Text>Не важно</Text>
          </View>

          <View style={taskFormStyles.radioButton}>
            <RadioButton value="Важно" />
            <Text>Важно</Text>
          </View>

          <View style={taskFormStyles.radioButton}>
            <RadioButton value="Очень важно" />
            <Text>Очень важно</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={taskFormStyles.button}
      >
        Сохранить
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={cancelSaveHandler}>
          <Dialog.Content>
            <Text variant="bodyMedium">Подтвердите сохранение</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={cancelSaveHandler}>Отмена</Button>
            <Button onPress={hideDialog}>Сохранить</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default TaskForm;
