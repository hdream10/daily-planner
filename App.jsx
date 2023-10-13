import { ScrollView, StyleSheet, View } from "react-native";
import TaskList from "./src/screens/TaskList";
import Header from "./src/components/header/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import AddBtn from "./src/components/UI/addBtn/AddBtn";
import EditTask from "./src/screens/EditTask";
import { useControlTask } from "./src/store/controlTask.store";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";

export default function App() {
  const { editScreen, editTaskMode, currentDate } = useControlTask();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const addTaskHandler = () => {
    editTaskMode();
  };

  useEffect(() => {
    if (!currentDate) return;
    const nowDate = moment().format("DD-MM-YYYY");
    const formatCurrentDate = moment(currentDate, "DD-MM-YYYY", true).toDate();
    setBtnDisabled(formatCurrentDate < moment(nowDate, "DD-MM-YYYY"));
  }, [currentDate]);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <View style={styles.page}>
          <Header />
          <ScrollView contentContainerStyle={styles.container}>
            {editScreen.mode ? <EditTask /> : <TaskList />}
          </ScrollView>
          {!editScreen.mode && (
            <AddBtn onPress={addTaskHandler} isDisabled={btnDisabled} />
          )}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    flexGrow: 1,
    paddingBottom: 50,
    paddingHorizontal: 16,
  },
});
