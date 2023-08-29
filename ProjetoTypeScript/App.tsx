import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Cachorro } from './model/Cachorro';
import { useState } from 'react';
import * as Speech from "expo-speech";

export default function App() {
  const [formCachorro, setFormCachorro]=useState<Partial<Cachorro>>({})

  const instanciar = () => {
    const cachorro = new Cachorro(formCachorro)
    alert("Objeto Instanciado: " + cachorro.nome)
    Speech.speak(`Au Au meu nome é ${cachorro.nome}`)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite o Id'
        keyboardType='numeric'
        onChangeText={val=>setFormCachorro({...formCachorro, id:parseInt(val)})}
        value={formCachorro.id?.toString()}
      >
      </TextInput>

      <TextInput
        placeholder='Digite o Nome'
        keyboardType='default'
        onChangeText={val=>setFormCachorro({...formCachorro, nome: val})}
        value={formCachorro.nome}
      >
      </TextInput>

      <TextInput
        placeholder='Digite a Raça'
        keyboardType='default'
        onChangeText={val=>setFormCachorro({...formCachorro, raca: val})}
        value={formCachorro.raca}
      >
      </TextInput>

      <TextInput
        placeholder='Digite a Data Nascimento'
        keyboardType='default'
        onChangeText={val=>setFormCachorro({...formCachorro, datanascimento: val})}
        value={formCachorro.datanascimento}
      >
      </TextInput>

      <TextInput
        placeholder='Digite a Cor do Pelo'
        keyboardType='default'
        onChangeText={val=>setFormCachorro({...formCachorro, corpelo: val})}
        value={formCachorro.corpelo}
      >
      </TextInput>

      <Button
        title='Instanciar Cachorro'
        onPress={instanciar}
      >
      </Button>
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
