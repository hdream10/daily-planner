import { TouchableOpacity, View } from "react-native";
import { Menu, Divider, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { taskHeaderStyles } from "./taskHeaderStyles";
import { useControlTask } from "../../store/controlTask.store";
import { filterUtil } from "../../utils/filterUtil";

const FilterMenu = ({ menuVisible, setMenuVisible }) => {
  const { setFilterValue, currentDate, setTasks } = useControlTask();

  const filterHandler = async (title) => {
    setFilterValue(title);
    const tasks = await filterUtil(title, currentDate);
    setTasks(tasks);
    setMenuVisible(false);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Menu
        style={{
          marginTop: 50,
        }}
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <TouchableOpacity
            style={taskHeaderStyles.iconButton}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="options" size={24} color="black" />
          </TouchableOpacity>
        }
      >
        <Text
          style={{
            textAlign: "center",
            paddingBottom: 8,
            paddingHorizontal: 8,
          }}
        >
          Фильтр по важности
        </Text>
        <Divider />
        <Menu.Item onPress={() => filterHandler("None")} title="По умолчанию" />
        <Menu.Item
          onPress={() => filterHandler("Очень важно")}
          title="Очень важно"
        />
        <Menu.Item onPress={() => filterHandler("Важно")} title="Важно" />
        <Menu.Item onPress={() => filterHandler("Не важно")} title="Не важно" />
      </Menu>
    </View>
  );
};

export default FilterMenu;
