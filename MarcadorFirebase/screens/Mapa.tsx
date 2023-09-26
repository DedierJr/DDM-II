import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MeuEstilo from '../estiloMapa.js'
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../firebase.js';
import { Marcador } from '../model/Marcador.tsx';
import meuestilo from '../meuestilo.js';

const Mapa = () => {
  const [formMarcador, setFormMarcador] = useState<Partial<Marcador>>({})
  const marcadorRef = firestore.collection('Marcador');
  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormMarcador({})
  }

  const cancelar = async() => {
    limparFormulario()
  }

const [position, setPosition] = useState({
  latitude: -31.308840,
  longitude: -54.113702,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});
const [title, setTitle] = useState("");
const [descricao, setDescricao] = useState("");


const salvar=()=>{}

  const marcadorRefComId = marcadorRef.doc();
  const marcador= new Marcador(formMarcador);
  marcador.id=marcadorRefComId.id

  console.log(marcador)
  marcadorRefComId.set(marcador.toFirestore()).then(() => {
      alert("Marcador" + marcador.lat + " Adicionado com Sucesso");
      console.log("Marcador" + marcador);
      console.log("Marcador ToString: "+marcador.toString())
      limparFormulario()
      });

  return (
          <View style={MeuEstilo.container}>
          <MapView style={MeuEstilo.map}
            region={position}
            onPress={e =>setPosition({...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta:e.nativeEvent.coordinate.latitudeDelta,
            longitudeDelta:e.nativeEvent.coordinate.longitudeDelta
            })
            }>

            <Marker
               coordinate={position}
              title={title}
              description={descricao}
            />
          </MapView>


  <Text>Latitude : {position.latitude}</Text>
  <Text>Longitude : {position.longitude}</Text>
      <TextInput
          placeholder="Title"
          value={title}
          onChangeText={title => setTitle(title)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Descricao"
          value={descricao}
          onChangeText={descricao => setDescricao(descricao)}
          style={MeuEstilo.input}
        />
         <TouchableOpacity
          onPress={salvar}
          style={[meuestilo.button, meuestilo.buttonOutline]}
        >
          <Text style={meuestilo.buttonOutlineText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelar} style={meuestilo.button}>
          <Text style={meuestilo.buttonText}>Cancelar</Text>
        </TouchableOpacity>
  </View>
  );
};

export default Mapa;