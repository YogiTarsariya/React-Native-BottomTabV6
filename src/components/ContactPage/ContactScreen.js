import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { TabActions } from '@react-navigation/native';
const ContactScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Contact Screen'}</Text>
               <Button 
                    title=" Go Contact Detail " 
                    onPress={() => { props.navigation.navigate('ContactDetailScreen') }}>
               </Button>

               <Button 
                    title="Go To Home Page" 
                    onPress={() => { 
                         const jumpToAction = TabActions.jumpTo('HomeScreen');
					props.navigation.dispatch(jumpToAction);
                     }}>
               </Button>
          </View>
     )
}
export default ContactScreen;