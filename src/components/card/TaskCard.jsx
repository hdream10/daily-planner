import { useState } from "react";
import { View } from "react-native";
import { Card, Checkbox, IconButton, Text } from "react-native-paper";
import { cardStyles } from "./cardStyles";
import { useControlTask } from "../../store/controlTask.store";
import { Navigation } from "react-native-navigation";

const TaskCard = ({ card }) => {
  const setDeleteMode = useControlTask().setDeleteMode;

  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(card.status);

  const handleNavigation = () => {
    Navigation.push("TaskList", {
      component: {
        name: "EditList",
        passProps: {
          data: "Some data",
        },
      },
    });
  };

  const handlePress = () => {
    setExpanded((prev) => !prev);
  };

  const handleCheckboxToggle = () => {
    setChecked((prev) => !prev);
  };

  const deleteHandler = () => {
    setDeleteMode(card.id);
  };

  return (
    <Card style={cardStyles.card} onPress={handlePress}>
      <Card.Content style={cardStyles.cardContent}>
        <View style={cardStyles.headContent}>
          <View style={cardStyles.taskDetails}>
            <Text style={cardStyles.taskTitle}>{card.title}</Text>
            <Text style={cardStyles.taskLevel}>{card.important}</Text>
          </View>
          <View style={cardStyles.actions}>
            <IconButton icon="delete" onPress={deleteHandler} />
            <IconButton icon="pencil" onPress={handleNavigation} />
            <Checkbox.Android
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
