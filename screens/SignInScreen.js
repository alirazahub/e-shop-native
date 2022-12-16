import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // Submit signup form
  };

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="transparent"/>
        <Text style={styles.title}>Sign in to my App!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate("signup")} >
        <Text style={styles.alreadyHaveAccountText}>Don't have an account?</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: '10%',
  },
  input: {
    padding: 10,
    width: '90%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  button: {
    backgroundColor: '#00d278',
    padding: 10,
    width: '90%',
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  alreadyHaveAccountText: {
    marginTop: 10
  }
});

export default SignInScreen;