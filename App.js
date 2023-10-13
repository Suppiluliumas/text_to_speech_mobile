import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [thingToSay,setThingToSay] = useState("")
  const speak = () => {
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        style={styles.input}
        placeholder='Text to speech'
        value={thingToSay}
        onChangeText={text => setThingToSay(text)}
      />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'lightblue',
  },
});
