import { ScrollView, StyleSheet, View } from "react-native";
import TaskList from "./src/screens/TaskList";
import Header from "./src/components/header/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import AddBtn from "./src/components/UI/addBtn/AddBtn";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <View style={styles.page}>
          <Header />
          <ScrollView contentContainerStyle={styles.container}>
            <TaskList />
          </ScrollView>
          <AddBtn />
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
