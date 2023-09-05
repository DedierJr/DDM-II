import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const showPicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hidePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const confirmaPicker = (date) => {
    alert("Valor Escolhido", date);
    hidePicker();
  };

  return (
    <View style={styles.container}>
      <Button title="Abre Picker" onPress={showPicker}></Button>

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="date"
        onConfirm={confirmaPicker}
        onCancel={hidePicker}
      ></DateTimePickerModal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
