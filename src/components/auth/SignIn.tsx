import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignIn = ({navigation}: NativeStackScreenProps<{}>) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkSignIn();
  },[]);

  async function checkSignIn() {
    try {
        let userData = await AsyncStorage.getItem('userData');
        if(userData) {
            navigation.navigate('app');
        }
    } catch(error) {
        console.log(error)
    }
  }

  const handleSubmit = async () => {
    // Handle sign-in logic (e.g., API calls, authentication)
    try {
      await AsyncStorage.setItem('userData', JSON.stringify({username, password}));
      console.log('Data stored successfully!');
      navigation.navigate('app');
    } catch (error) {
      console.error('Error storing data:', error);
    }
    //   console.log('Username:', username);
    //   console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
