import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const RegistrationScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Registration Screen'}</Text>
               <Button 
                    title=" Back " 
                    onPress={() => { props.navigation.goBack() }}>
               </Button>
               <Button 
                    title=" Go To Home Page (Bottom Bar) " 
                    onPress={() => { props.navigation.navigate('HomeScreen') }}>
               </Button>
          </View>
     )
}
export default RegistrationScreen;