import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const ChatDetailScreen = props => {
     return (
          <View 
               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Chat Detail Screen'}</Text>
               <Button 
                    title=" BACK " 
                    onPress={() => { props.navigation.goBack() }}>
               </Button>
          </View>
     )
}
export default ChatDetailScreen;