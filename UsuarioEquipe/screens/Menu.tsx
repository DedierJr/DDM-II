import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterEquipe from './ManterEquipe';
import ListarEquipes from './ListarEquipes';

function ListarScreen({ navigation }) {
  return (
   <ListarEquipes></ListarEquipes>
  );
}
function ManterScreen({ navigation }) {
  return (
   <ManterEquipe></ManterEquipe>
  );
}
const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    
      <Drawer.Navigator initialRouteName="Manter Equipe">
        <Drawer.Screen name="Manter Equipe" component={ManterScreen} />
        <Drawer.Screen name="Listar Equipe" component={ListarScreen} />
        
      </Drawer.Navigator>
    
  );
}