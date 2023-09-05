import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const showPicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hidePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const confirmaPicker = (date) => {
    const formattedDate =
      date.getDate().toString().padStart(2, "0") +
      "/" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getFullYear();
    setFormattedDate(formattedDate); // Define o estado para a data formatada
    alert("Valor Escolhido\n\n" + formattedDate);
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
      <Text>Data escolhida: {formattedDate}</Text>
      <TextInput>Data escolhida: {formattedDate}</TextInput>
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
