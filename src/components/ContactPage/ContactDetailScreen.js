import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const ContactDetailScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Contact Detail Screen'}</Text>
               <Button 
                    title=" BACK " 
                    onPress={() => { props.navigation.goBack() }}>
               </Button>
          </View>
     )
}
export default ContactDetailScreen;