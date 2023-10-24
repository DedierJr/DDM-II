import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, KeyboardAvoidingView, Alert, Text,  Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Equipe } from "../model/Equipe";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const ManterEquipe = () => {
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

  const [formEquipe, setFormEquipe] = useState<Partial<Equipe>>({})
  const equipeRef = firestore.collection('Equipe');
  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormEquipe({})
  }

  const cancelar = async() => {
    limparFormulario()
  }
  const salvar = async() => {
    const equipeRefComId = equipeRef.doc();
    const equipe= new Equipe(formEquipe);
    equipe.id=equipeRefComId.id
    equipe.data_criacao = formattedDate

    console.log(equipe)
    equipeRefComId.set(equipe.toFirestore()).then(() => {
         alert("Equipe " + equipe.nome + " Adicionado com Sucesso");
         console.log("Equipe" + equipe);
         console.log("Equipe ToString: "+equipe.toString())
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
          value={formEquipe.nome}
          onChangeText={val => setFormEquipe({ ...formEquipe, nome: val })}
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
        placeholder="Quantidade de participantes"
        onChangeText={val => setFormEquipe({ ...formEquipe, qtd_participantes: parseInt(val, 10) })} // Converte para número
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

export default ManterEquipe;

