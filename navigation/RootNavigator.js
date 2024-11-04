import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Main'
        component={MainNavigator}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        screenOptions={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});