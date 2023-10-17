  import React, { useState, useEffect } from "react";
  import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
  import { auth, firestore } from "../firebase";
  import MeuEstilo from "../meuestilo";
  import { Arvore } from "../model/Arvore";
  const ListarArvores = () => {
  const [loading, setLoading] = useState(true); // Set loading to true
  const [arvores, setArvores] = useState<Arvore[]>([]); // Initial empty array
  const arvoreRef = firestore.collection('Arvore');
  
  useEffect(() => {
      const subscriber = arvoreRef
          .onSnapshot((querySnapshot) => {
          const arvores = [];
          querySnapshot.forEach((documentSnapshot) => {
            arvores.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          });
        });
          setArvores(arvores);
          setLoading(false);
    });
  return () => subscriber();
  }, [arvores]);


    if (loading) {
    return <ActivityIndicator />;
    }

  
  const Item = ({ item }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>Nome: {item.nome}</Text>
      <Text style={MeuEstilo.title}>Tamanho: {item.tamanho}</Text>  
      <Text style={MeuEstilo.title}>Nome Científico: {item.nome_cientifico}</Text>  
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  
  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={arvores}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    );
  };
  export default ListarArvores;
