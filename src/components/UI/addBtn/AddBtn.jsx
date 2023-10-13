import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { addBtnStyles } from "./addBtnStyles";

const AddBtn = ({ onPress, isDisabled }) => {
  return (
    <View
      style={[addBtnStyles.container, isDisabled ? { opacity: 0.3 } : null]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        style={addBtnStyles.button}
      >
        <Ionicons name="add" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddBtn;
