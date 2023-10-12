import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { taskHeaderStyles } from "./taskHeaderStyles";
import Search from "../UI/search/Search";
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import FilterMenu from "./FilterMenu";

const TaskHeader = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <View style={taskHeaderStyles.headerContent}>
      <View style={taskHeaderStyles.container}>
        <Text style={taskHeaderStyles.dateText}>{formattedDate}</Text>
        <View style={taskHeaderStyles.iconsContainer}>
          <TouchableOpacity
            style={taskHeaderStyles.iconButton}
            onPress={() => setSearchVisible((prev) => !prev)}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={taskHeaderStyles.iconButton}
            onPress={() => setOpenCalendar((prev) => !prev)}
          >
            <Ionicons name="calendar" size={24} color="black" />
          </TouchableOpacity>

          <FilterMenu
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        </View>
      </View>
      {searchVisible && <Search />}
      <Calendar open={openCalendar} setOpen={setOpenCalendar} />
    </View>
  );
};

export default TaskHeader;
