import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { confirmChechStyles } from "./confirmCheckStyles";
import { useControlTask } from "../../store/controlTask.store";
import { postTask } from "../../service/postTask";

const ConfirmCheck = () => {
  const { modalState, removeModal, setTasks } = useControlTask();

  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    removeModal();
    setDescription("");
    setTime("");
    setVisible(false);
  };

  const handleTimeChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setTime(numericValue);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const confirmHandler = async () => {
    if (time || description) {
      const cards = await postTask({
        ...modalState.task,
        statusInfo: {
          time: time,
          description: description,
        },
      });
      setTasks(cards);
    }
    hideDialog();
  };

  useEffect(() => {
    if (modalState.type === "editStatus") setVisible(modalState.mode);
  }, [modalState.mode]);

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={confirmChechStyles.container}
      >
        <Dialog.Title style={{ textAlign: "center" }}>
          Завершение задачи
        </Dialog.Title>
        <View>
          <TextInput
            label="Время (кол-во минут)"
            value={time}
            onChangeText={handleTimeChange}
            style={confirmChechStyles.input}
            keyboardType="numeric"
          />
          <TextInput
            label="Примечание"
            value={description}
            onChangeText={handleDescriptionChange}
            multiline
            style={confirmChechStyles.input}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Dialog.Actions>
            <Button onPress={confirmHandler}>Сохранить</Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

export default ConfirmCheck;
