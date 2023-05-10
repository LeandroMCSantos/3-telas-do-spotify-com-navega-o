import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Teste from "../pages/telaA";
import B from "../pages/telaB";
import C from "../pages/telaC";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Teste" component={Teste} />
      <Drawer.Screen name="B" component={B} />
      <Drawer.Screen name="C" component={C} />
    </Drawer.Navigator>
  );
}