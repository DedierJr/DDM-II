// DetalhesMarcador.tsx
import React from 'react';
import { View, Text } from 'react-native';

const DetalhesMarcador = ({ route }) => {
    const { marcador } = route.params;

    return (
        <View>
            <Text>{marcador.titulo}</Text>
            <Text>{marcador.descricao}</Text>
            {/* Outros detalhes do marcador */}
        </View>
    );
};

export default DetalhesMarcador;
