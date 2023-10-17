import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {  KeyboardAvoidingView, Alert, Text,  Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Arvore } from "../model/Arvore";

const ManterArvore = () => {
  const [formArvore, setFormArvore] = useState<Partial<Arvore>>({})
  const arvoreRef = firestore.collection('Arvore');
  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormArvore({})
  }

  const cancelar = async() => {
    limparFormulario()
  }
  const salvar = async() => {
    const arvoreRefComId = arvoreRef.doc();
    const arvore= new Arvore(formArvore);
    arvore.id=arvoreRefComId.id

    console.log(arvore)
    arvoreRefComId.set(arvore.toFirestore()).then(() => {
         alert("Arvore " + arvore.nome + " Adicionado com Sucesso");
         console.log("Arvore" + arvore);
         console.log("Arvore ToString: "+arvore.toString())
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
          value={formArvore.nome}
          onChangeText={val => setFormArvore({ ...formArvore, nome: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Tamanho"
          value={formArvore.tamanho}
          onChangeText={val => setFormArvore({ ...formArvore, tamanho: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Nome Científico"
          value={formArvore.nome_cientifico}
          onChangeText={val => setFormArvore({ ...formArvore, nome_cientifico: val })}
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

export default ManterArvore;

