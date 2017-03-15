
//Impoort library to help create Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create component
const App = () => (
    <Text>Some Text</Text>
  );

//Render to device
AppRegistry.registerComponent('albums', () => App);
