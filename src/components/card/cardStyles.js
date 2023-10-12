import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 10,
  },
  headContent:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskLevel: {
    marginTop: 5,
    color: "gray",
  },
  taskDescription: {
    marginTop: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems:'center',
},
});
