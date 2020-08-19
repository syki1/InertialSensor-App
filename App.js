import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Inertial sensor App</Text>
      <StatusBar style="auto" />
    
    
    <Button style={styles.button}           
      title="O Aplikacji"
      type="a"
      >
      </Button> 
      <Button style={styles.button}           
      title="Nowa gra"
      type="a"
      ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: "24px",
    flex: 1,
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: "10px",
    color: "gray",
    backgroundColor: "red",
    width: "200px"
  }
});
