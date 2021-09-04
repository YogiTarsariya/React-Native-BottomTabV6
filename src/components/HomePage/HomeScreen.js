import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { TabActions } from '@react-navigation/native';

const HomeScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'HOME Screen'}</Text>
               <Button 
                    title=" Go HOME Detail " 
                    onPress={() => { props.navigation.navigate('HomeDetailScreen') }}>
               </Button>

               <Button 
                    title="Go To Chat Page" 
                    onPress={() => { 
                         const jumpToAction = TabActions.jumpTo('ChatScreen');
					props.navigation.dispatch(jumpToAction);
                     }}>
               </Button>
               
          </View>
     )
}
export default HomeScreen;