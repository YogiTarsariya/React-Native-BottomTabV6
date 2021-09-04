import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { TabActions } from '@react-navigation/native';

const ChatScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Chat Screen'}</Text>
               <Button 
                    title=" Go Chat Detail " 
                    onPress={() => { props.navigation.navigate('ChatDetailScreen') }}>
               </Button>

               <Button 
                    title="Go To Contact Page" 
                    onPress={() => { 
                         const jumpToAction = TabActions.jumpTo('ContactScreen');
					props.navigation.dispatch(jumpToAction);
                     }}>
               </Button>
          </View>
     )
}
export default ChatScreen;