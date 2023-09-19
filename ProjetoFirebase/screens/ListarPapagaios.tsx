  import React, { useState, useEffect } from "react";
  import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
  import { auth, firestore } from "../firebase";
  import MeuEstilo from "../meuestilo";
  import { Papagaio } from "../model/Papagaio";
  const ListarPapagaios = () => {
  const [loading, setLoading] = useState(true); // Set loading to true
  const [papagaios, setPapagaios] = useState<Papagaio[]>([]); // Initial empty array
  const papagaioRef = firestore.collection('Papagaio');
  
  useEffect(() => {
      const subscriber = papagaioRef
          .onSnapshot((querySnapshot) => {
          const papagaios = [];
          querySnapshot.forEach((documentSnapshot) => {
            papagaios.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          });
        });
          setPapagaios(papagaios);
          setLoading(false);
    });
  return () => subscriber();
  }, [papagaios]);


    if (loading) {
    return <ActivityIndicator />;
    }

  
  const Item = ({ item }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>Nome : {item.nome}</Text>
      <Text style={MeuEstilo.title}>Raça : {item.raca}</Text>  
      <Text style={MeuEstilo.title}>Sexo : {item.sexo}</Text>  
      <Text style={MeuEstilo.title}>Idioma : {item.idioma}</Text>  
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  
  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={papagaios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    );
  };
  export default ListarPapagaios;
