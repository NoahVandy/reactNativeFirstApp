import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DetailsScreen from './src/DetailsScreen';
import DetailsScreen from './src/HomeScreen';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change text" onPress={() => {content} }/>
    </View>
  );
}

let content = <DetailsScreen onStartGame={startGameHandler} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
