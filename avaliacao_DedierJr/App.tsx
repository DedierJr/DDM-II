import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListarArvores from './screens/ListarArvores';
import ManterArvore from './screens/ManterArvore';



function ManterArvoreScreen({ navigation }) {
  return (
   <ManterArvore></ManterArvore>
  );
}


function ListarArvoresScreen({ navigation }) {
  return (
   <ListarArvores></ListarArvores>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Arvore">
        <Drawer.Screen name="Manter Arvore" component={ManterArvoreScreen} />
        <Drawer.Screen name="Listar Arvores" component={ListarArvoresScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}