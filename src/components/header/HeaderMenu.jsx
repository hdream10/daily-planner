import { View } from "react-native";
import { Menu, Divider, Text, Appbar } from "react-native-paper";

const HeaderMenu = ({ menuVisible, setMenuVisible }) => {
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
        <Text style={{ textAlign: "center", paddingBottom: 8 }}>
          Тема
        </Text>
        <Divider />
        <Menu.Item onPress={() => {}} title="Dark" />
        <Menu.Item onPress={() => {}} title="Light" />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
