import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { useControlTask } from "../../store/controlTask.store";
import { deleteTask } from "../../service/deleteTask";

const ConfirmationDelete = () => {
  const { modalDelete, removeDeleteMode, setTasks } = useControlTask();
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    removeDeleteMode();
  };

  const confirmDelete = async () => {
    const cards = await deleteTask(modalDelete.task);
    setTasks(cards)
    removeDeleteMode();
  };

  useEffect(() => {
    setVisible(modalDelete.mode);
  }, [modalDelete.mode]);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Удаление задачи</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Вы уверены, что хотите удалить задачу "{modalDelete.task.title}"?
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
