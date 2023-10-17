import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterArvore from './ManterArvore';
import ListarArvores from './ListarArvores';

function ListarScreen({ navigation }) {
  return (
   <ListarArvores></ListarArvores>
  );
}
function ManterScreen({ navigation }) {
  return (
   <ManterArvore></ManterArvore>
  );
}
const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    
      <Drawer.Navigator initialRouteName="Manter Arvore">
        <Drawer.Screen name="Manter Arvore" component={ManterScreen} />
        <Drawer.Screen name="Listar Arvore" component={ListarScreen} />
        
      </Drawer.Navigator>
    
  );
}