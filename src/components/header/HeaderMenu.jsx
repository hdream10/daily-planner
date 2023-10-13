import { View } from "react-native";
import { Menu, Appbar } from "react-native-paper";
import { useControlTask } from "../../store/controlTask.store";

const HeaderMenu = ({ menuVisible, setMenuVisible }) => {
  const setTasks = useControlTask().setTasks;

  const pressHandler = async () => {
    try {
      setMenuVisible(false);
      await AsyncStorage.clear();
      setTasks([]);
    } catch (error) {
      console.error("Ошибка при очистке AsyncStorage:", error);
    }
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
          <Appbar.Action icon="menu" onPress={() => setMenuVisible(true)} />
        }
      >
        <Menu.Item onPress={pressHandler} title="Удалить все задачи" />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
