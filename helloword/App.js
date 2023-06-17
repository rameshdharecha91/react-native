import * as React from 'react';
import { FlatList,StyleSheet,View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './src/Contact';
import Status from './src/CreateContact';
import CreateContact from './src/CreateContact';

const Bottom = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Bottom.Navigator initialRouteName="Contact">
        <Bottom.Screen title="Contact list" name="Contact" component={Contact} />
        <Bottom.Screen title="Add new contact" name="CreateContact" component={CreateContact} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default App;