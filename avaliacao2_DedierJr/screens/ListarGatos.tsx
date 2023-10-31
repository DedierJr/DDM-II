  import React, { useState, useEffect } from "react";
  import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
  import { auth, firestore } from "../firebase";
  import MeuEstilo from "../meuestilo";
  import { Gato } from "../model/Gato";
  const ListarGatos = () => {
  const [loading, setLoading] = useState(true); // Set loading to true
  const [gatos, setGatos] = useState<Gato[]>([]); // Initial empty array
  const gatoRef = firestore.collection('Gato');
  
  useEffect(() => {
      const subscriber = gatoRef
          .onSnapshot((querySnapshot) => {
          const gatos = [];
          querySnapshot.forEach((documentSnapshot) => {
            gatos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          });
        });
          setGatos(gatos);
          setLoading(false);
    });
  return () => subscriber();
  }, [gatos]);


    if (loading) {
    return <ActivityIndicator />;
    }

  
  const Item = ({ item }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>Nome: {item.nome}</Text>
      <Text style={MeuEstilo.title}>Data de Nascimento: {item.data_nasc}</Text>  
      <Text style={MeuEstilo.title}>Raça: {item.raca}</Text>
      <Text style={MeuEstilo.title}>Sexo: {item.sexo}</Text>
      <Text style={MeuEstilo.title}>Comida Favorita: {item.comida_fav}</Text>      
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  
  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={gatos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    );
  };
  export default ListarGatos;
