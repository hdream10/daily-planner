import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { useControlTask } from "../../store/controlTask.store";
import { deleteTask } from "../../service/deleteTask";

const ConfirmationDelete = () => {
  const { modalState, removeModal, setTasks } = useControlTask();
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
    removeModal();
  };

  const confirmDelete = async () => {
    const cards = await deleteTask(modalState.task);
    setTasks(cards);
    hideDialog();
  };

  useEffect(() => {
    if (modalState.type === "delete") setVisible(modalState.mode);
  }, [modalState.mode]);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Удаление задачи</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Вы уверены, что хотите удалить задачу "{modalState.task.title}"?
          </Text>
        </Dialog.Content>
        <View style={{ flexDirection: "row" }}>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Отмена</Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button onPress={confirmDelete}>Удалить</Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

export default ConfirmationDelete;
