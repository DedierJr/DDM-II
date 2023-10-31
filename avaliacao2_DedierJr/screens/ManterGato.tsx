import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, KeyboardAvoidingView, Alert, Text,  Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Gato } from "../model/Gato";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const ManterGato = () => {
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

  const [formGato, setFormGato] = useState<Partial<Gato>>({})
  const gatoRef = firestore.collection('Gato');
  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormGato({})
  }

  const cancelar = async() => {
    limparFormulario()
  }
  const salvar = async() => {
    const gatoRefComId = gatoRef.doc();
    const gato= new Gato(formGato);
    gato.id=gatoRefComId.id
    gato.data_nasc = formattedDate

    console.log(gato)
    gatoRefComId.set(gato.toFirestore()).then(() => {
         alert("Gato " + gato.nome + " Adicionado com Sucesso");
         console.log("Gato" + gato);
         console.log("Gato ToString: "+gato.toString())
         limparFormulario()
         });
    };
    
  
  return (
    <KeyboardAvoidingView 
    style={meuestilo.container}
    behavior="padding">
      <View style={meuestilo.inputContainer}>
        <TextInput
          placeholder="Nome"
          value={formGato.nome}
          onChangeText={val => setFormGato({ ...formGato, nome: val })}
          style={meuestilo.input}
        />
        <Button title="Abre Picker" onPress={showPicker}></Button>
          <DateTimePickerModal
            isVisible={isDateTimePickerVisible}
            mode="date"
            onConfirm={confirmaPicker}
            onCancel={hidePicker}
          ></DateTimePickerModal>
          <TextInput>Data escolhida: {formattedDate}</TextInput>
        <TextInput
        placeholder="Raça"
        onChangeText={val => setFormGato({ ...formGato, raca: val })}
        style={meuestilo.input}
      />
      <TextInput
        placeholder="Sexo"
        onChangeText={val => setFormGato({ ...formGato, sexo: val })}
        style={meuestilo.input}
      />
      <TextInput
        placeholder="Comida Favorita"
        onChangeText={val => setFormGato({ ...formGato, comida_fav: val })}
        style={meuestilo.input}
      />
      </View>

      <View style={meuestilo.buttonContainer}>
        <TouchableOpacity onPress={cancelar} style={meuestilo.button}>
          <Text style={meuestilo.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={salvar}
          style={[meuestilo.button, meuestilo.buttonOutline]}
        >
          <Text style={meuestilo.buttonOutlineText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ManterGato;

