import { Appbar } from "react-native-paper";
import { headerStyles } from "./headerStyles";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import { useControlTask } from "../../store/controlTask.store";

const Header = () => {
  const { editScreen, clearEditMode } = useControlTask();
  const [menuVisible, setMenuVisible] = useState(false);

  const backPressHandler = () => {
    clearEditMode();
  };

  return (
    <Appbar.Header style={headerStyles.container}>
      {editScreen.mode && <Appbar.BackAction onPress={backPressHandler} />}
      <Appbar.Content title="Ежедневник" />
      <HeaderMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </Appbar.Header>
  );
};

export default Header;
