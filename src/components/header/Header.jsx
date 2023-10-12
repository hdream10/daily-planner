import { Appbar } from "react-native-paper";
import { headerStyles } from "./headerStyles";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
      <Appbar.Header style={headerStyles.container}>
        <Appbar.Content title="Ежедневник" />
        <HeaderMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      </Appbar.Header>
  );
};

export default Header;
