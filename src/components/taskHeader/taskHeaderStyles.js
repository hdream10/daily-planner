import { StyleSheet } from "react-native";


export const taskHeaderStyles = StyleSheet.create({
    headerContent:{
        marginBottom: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      dateText: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      iconsContainer: {
        flexDirection: 'row',
      },
      iconButton: {
        marginLeft: 12,
      },
})