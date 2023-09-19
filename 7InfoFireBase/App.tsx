import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListarCachorros from './screens/ListarCachorros';
import ManterCachorro from './screens/ManterCachorro';



function ManterCachorroScreen({ navigation }) {
  return (
   <ManterCachorro></ManterCachorro>
  );
}


function ListarCachorrosScreen({ navigation }) {
  return (
   <ListarCachorros></ListarCachorros>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Cachorro">
        <Drawer.Screen name="Manter Cachorro" component={ManterCachorroScreen} />
        <Drawer.Screen name="Listar Cachorros" component={ListarCachorrosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}