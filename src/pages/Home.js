import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');
    
    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        
        if(currentHour < 12) {
            setGreeting('Good morning 🌄');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Good afternoon 🌤️');
        }
        else {
            setGreeting('Good night 🌘');
        }
        

    }, [])

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Bruno</Text>
        
        <Text style={styles.greetings}>
            { greeting }
        </Text>

        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
            My skills
        </Text>
        
        <FlatList 
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <SkillCard skill={item} />
            )}
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
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    greetings: {
        color: '#FFF',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

