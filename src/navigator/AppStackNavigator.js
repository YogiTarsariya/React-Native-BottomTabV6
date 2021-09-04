import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBottomNavigator } from ".";
import { ChatScreen } from "../components";
import { ContactScreen } from "../components";
import { HomeDetailScreen } from "../components";
import { ChatDetailScreen } from "../components";
import { ContactDetailScreen } from "../components";
const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
     return (
          <Stack.Navigator>
               <Stack.Screen name={'HomeScreen'} component={AppBottomNavigator} options={{ headerShown: false }} />
               <Stack.Screen name={'ChatScreen'} component={ChatScreen} options={{ headerShown: false }} />
               <Stack.Screen name={'ContactScreen'} component={ContactScreen} options={{ headerShown: false }} />

               <Stack.Screen name={'HomeDetailScreen'} component={HomeDetailScreen} options={{ headerShown: true }} />
               <Stack.Screen name={'ChatDetailScreen'} component={ChatDetailScreen} options={{ headerShown: true }} />
               <Stack.Screen name={'ContactDetailScreen'} component={ContactDetailScreen} options={{ headerShown: true }} />
          </Stack.Navigator>
     )
}