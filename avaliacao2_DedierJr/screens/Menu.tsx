import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterGato from './ManterGato';
import ListarGatos from './ListarGatos';

function ListarScreen({ navigation }) {
  return (
   <ListarGatos></ListarGatos>
  );
}
function ManterScreen({ navigation }) {
  return (
   <ManterGato></ManterGato>
  );
}
const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    
      <Drawer.Navigator initialRouteName="Manter Gato">
        <Drawer.Screen name="Manter Gato" component={ManterScreen} />
        <Drawer.Screen name="Listar Gato" component={ListarScreen} />
        
      </Drawer.Navigator>
    
  );
}