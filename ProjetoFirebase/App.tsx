import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListarPapagaios from './screens/ListarPapagaios';
import ManterPapagaio from './screens/ManterPapagaio';



function ManterPapagaioScreen({ navigation }) {
  return (
   <ManterPapagaio></ManterPapagaio>
  );
}


function ListarPapagaiosScreen({ navigation }) {
  return (
   <ListarPapagaios></ListarPapagaios>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Papagaio">
        <Drawer.Screen name="Manter Papagaio" component={ManterPapagaioScreen} />
        <Drawer.Screen name="Listar Papagaios" component={ListarPapagaiosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}