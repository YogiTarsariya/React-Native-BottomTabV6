import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "../components";
import { ChatScreen } from "../components";
import { ContactScreen } from "../components";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function AppBottomNavigator() {
     return (
          <Tab.Navigator
               tabBarOptions={{ activeTintColor: 'red' }}>
               <Tab.Screen
                    name={'HomeScreen'}
                    component={HomeScreen}
                    options={{
                         tabBarLabel: "Home",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="home"
                            color={'black'}
                            size={20} />
                    )
               }} />
               <Tab.Screen
                    name={'ChatScreen'}
                    component={ChatScreen}
                    options={{
                         tabBarLabel: "Chat",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="comments"
                            color={'black'}
                            size={20} />
                    )
               }} />
               <Tab.Screen
                    name={'ContactScreen'}
                    component={ContactScreen}
                    options={{
                         tabBarLabel: "Contact",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="address-book"
                            color={'black'}
                            size={20} />
                    )
               }} />
          </Tab.Navigator>    
     )
}