import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';

export function Home(){
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Bruno</Text>

       <StatusBar /> 
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
    },
    title: {
        color: '#FFF'
    },
});

