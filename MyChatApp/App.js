import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLoginStack from './src/Navigation/RegisterLoginStack';

  const App = ({navigation}) =>{
  return (
    <NavigationContainer>
      <RegisterLoginStack />
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Background:{
    flex:1,
    padding: 20,
    justifyContent:'center',
    alignContent:'center',
  } 
});

export default App;
