import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../components";
import { RegistrationScreen } from "../components";
import { AppStackNavigator } from ".";

const Stack = createNativeStackNavigator();

export default function AppAuthStackNavigator() {
     return (
          <Stack.Navigator initialRouteName={'LoginScreen'}>
               <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{ headerShown: false }} />
               <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} options={{ headerShown: false }} />
               <Stack.Screen name={'HomeScreen'} component={AppStackNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
     )
}