import { TouchableOpacity, View } from "react-native";
import { Menu, Divider, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { taskHeaderStyles } from "./taskHeaderStyles";

const FilterMenu = ({ menuVisible, setMenuVisible }) => {
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
        <Menu.Item onPress={() => {}} title="Очень важно" />
        <Menu.Item onPress={() => {}} title="Важно" />
        <Menu.Item onPress={() => {}} title="Не важно" />
      </Menu>
    </View>
  );
};

export default FilterMenu;
