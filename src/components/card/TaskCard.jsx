import { useState } from "react";
import { View } from "react-native";
import { Card, Checkbox, IconButton, Text } from "react-native-paper";
import { cardStyles } from "./cardStyles";
import { useControlTask } from "../../store/controlTask.store";
import { postTask } from "../../service/postTask";
import { useEffect } from "react";

const TaskCard = ({ card, isDisabled = false }) => {
  const { editTaskMode, setDeleteMode, setTasks } = useControlTask();

  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(card.status);

  const editModeHandler = () => {
    editTaskMode(card);
  };

  const handlePress = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    setChecked(card.status);
  }, [card.status]);

  const handleCheckboxToggle = async () => {
    const cards = await postTask({ ...card, status: !checked });
    setChecked(!checked);
    setTasks(cards);
  };

  const deleteHandler = () => {
    setDeleteMode(card);
  };

  return (
    <Card style={cardStyles.card} onPress={handlePress}>
      <Card.Content>
        <View style={cardStyles.headContent}>
          <View style={cardStyles.taskDetails}>
            <Text style={cardStyles.taskTitle}>{card.title}</Text>
            <Text style={cardStyles.taskLevel}>{card.important}</Text>
          </View>
          <View style={cardStyles.actions}>
            <IconButton
              disabled={isDisabled}
              icon="delete"
              onPress={deleteHandler}
            />
            <IconButton
              disabled={isDisabled}
              icon="pencil"
              onPress={editModeHandler}
            />
            <Checkbox.Android
              disabled={isDisabled}
              status={checked ? "checked" : "unchecked"}
              onPress={handleCheckboxToggle}
            />
          </View>
        </View>
        {expanded && card.description && (
          <Text style={cardStyles.taskDescription}>{card.description}</Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default TaskCard;
