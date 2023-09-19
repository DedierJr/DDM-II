import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {  KeyboardAvoidingView, Alert, Text,  Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Papagaio } from "../model/Papagaio";

const ManterPapagaio = () => {
  const [formPapagaio, setFormPapagaio] = useState<Partial<Papagaio>>({})
  const papagaioRef = firestore.collection('Papagaio');
  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormPapagaio({})
  }

  const cancelar = async() => {
    limparFormulario()
  }
  const salvar = async() => {
    const papagaioRefComId = papagaioRef.doc();
    const papagaio= new Papagaio(formPapagaio);
    papagaio.id=papagaioRefComId.id

    console.log(papagaio)
    papagaioRefComId.set(papagaio.toFirestore()).then(() => {
         alert("Papagaio" + papagaio.nome + " Adicionado com Sucesso");
         console.log("Papagaio" + papagaio);
         console.log("Papagaio ToString: "+papagaio.toString())
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
          value={formPapagaio.nome}
          onChangeText={val => setFormPapagaio({ ...formPapagaio, nome: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Sexo"
          value={formPapagaio.sexo}
          onChangeText={val => setFormPapagaio({ ...formPapagaio, sexo: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Raca"
          value={formPapagaio.raca}
          onChangeText={val => setFormPapagaio({ ...formPapagaio, raca: val })}
          style={meuestilo.input}
        />

        <TextInput
          placeholder="Idioma"
          value={formPapagaio.idioma}
          onChangeText={val => setFormPapagaio({ ...formPapagaio, idioma: val })}
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

export default ManterPapagaio;

