import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MeuEstilo from '../estiloMapa.js';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../firebase.js';
import { Marcador } from '../model/Marcador.tsx';
import meuestilo from '../meuestilo.js';

const Mapa = () => {
    const [formMarcador, setFormMarcador] = useState<Partial<Marcador>>({});
    const marcadorRef = firestore.collection('Marcador');
    const navigation = useNavigation();

    const limparFormulario = () => {
        setFormMarcador({
            lat: 0,
            long: 0,
            titulo: '',
            descricao: ''
        });
    };

    const cancelar = () => {
        limparFormulario();
    };

    const salvar = async () => {
        const marcador = new Marcador({
            lat: formMarcador.lat || 0,
            long: formMarcador.long || 0,
            titulo: formMarcador.titulo || '',
            descricao: formMarcador.descricao || ''
        });
        await marcador.salvar();
        alert("Marcador adicionado com sucesso");
        limparFormulario();
    };

    const [position, setPosition] = useState({
        latitude: -31.308840,
        longitude: -54.113702,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    const [title, setTitle] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <View style={MeuEstilo.container}>
            <MapView style={MeuEstilo.map}
                region={position}
                onPress={e => setPosition({
                    ...position,
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                    latitudeDelta: e.nativeEvent.coordinate.latitudeDelta,
                    longitudeDelta: e.nativeEvent.coordinate.longitudeDelta
                })}
            >

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
                value={formMarcador.titulo || ''}
                onChangeText={titulo => setFormMarcador({ ...formMarcador, titulo })}
                style={MeuEstilo.input}
            />
            <TextInput
                placeholder="Descricao"
                value={formMarcador.descricao || ''}
                onChangeText={descricao => setFormMarcador({ ...formMarcador, descricao })}
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
