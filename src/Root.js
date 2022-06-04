import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../src/screens/MainScreen'

function Root() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
const styles=StyleSheet.create({
  size:{
    flex:1
  }
})

export default Root