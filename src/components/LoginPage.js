import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Optional validation logic (replace with your validation rules)
  const validateInput = () => {
    if (username.trim() === '') {
      alert('Please enter your username.');
      return false;
    }
    if (password.trim() === '') {
      alert('Please enter your password.');
      return false;
    }
    return true; // Input is valid
  };

  const handleLogin = async () => {
    if (!validateInput()) {
      return; // Prevent login if validation fails
    }

    // Implement login logic here (e.g., API call)
    // Replace with your authentication process
    console.log('Processing login...');

    setUsername(''); // Clear form after login attempt
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false} // Disable autocorrect for usernames
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Mask password characters
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the content fill the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: 20, // Add some padding for aesthetics
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%', // Make the form container span the full width
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default LoginPage;
