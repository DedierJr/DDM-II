  import React, { useState, useEffect } from "react";
  import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
  import { auth, firestore } from "../firebase";
  import MeuEstilo from "../meuestilo";
  import { Equipe } from "../model/Equipe";
  const ListarEquipes = () => {
  const [loading, setLoading] = useState(true); // Set loading to true
  const [equipes, setEquipes] = useState<Equipe[]>([]); // Initial empty array
  const equipeRef = firestore.collection('Equipe');
  
  useEffect(() => {
      const subscriber = equipeRef
          .onSnapshot((querySnapshot) => {
          const equipes = [];
          querySnapshot.forEach((documentSnapshot) => {
            equipes.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          });
        });
          setEquipes(equipes);
          setLoading(false);
    });
  return () => subscriber();
  }, [equipes]);


    if (loading) {
    return <ActivityIndicator />;
    }

  
  const Item = ({ item }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>Nome: {item.nome}</Text>
      <Text style={MeuEstilo.title}>Data Criação: {item.data_criacao}</Text>  
      <Text style={MeuEstilo.title}>Quantidade de Participantes: {item.qtd_participantes}</Text>  
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  
  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={equipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    );
  };
  export default ListarEquipes;
