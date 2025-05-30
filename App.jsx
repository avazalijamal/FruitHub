import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.contoiner}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contoiner: {
    width: '100%',
    height: '50%',
    backgroundColor: 'red',

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'blue',
    margin: 10,
    padding: 10,
  },
});

export default App;
