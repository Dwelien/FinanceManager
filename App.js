import React from 'react';
import { StyleSheet,Container, Content, Button, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={() => console.log("Button pressed!")} />
    </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
