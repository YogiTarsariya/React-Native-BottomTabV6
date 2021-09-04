import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const LoginScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Login Screen'}</Text>
               <Button 
                    title=" Go To Registration Page " 
                    onPress={() => { props.navigation.navigate('RegistrationScreen') }}>
               </Button>
               <Button 
                    title=" Go To Home Page (Bottom Bar) " 
                    onPress={() => { props.navigation.navigate('HomeScreen') }}>
               </Button>
          </View>
     )
}
export default LoginScreen;