import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addBtnStyles } from './addBtnStyles';

const AddBtn = () => {
    return (
        <View style={addBtnStyles.container}>
          <TouchableOpacity style={addBtnStyles.button}>
            <Ionicons name="add" size={45} color="white" />
          </TouchableOpacity>
        </View>
      );
}

export default AddBtn