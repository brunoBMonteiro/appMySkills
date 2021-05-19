import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    Platform,
} from 'react-native';

export function Home(){
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Bruno</Text>
        
        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
        />
 
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    }
});

