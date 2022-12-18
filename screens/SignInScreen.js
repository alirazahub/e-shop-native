import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const onSubmit = async () => {
    try {
      const response = await fetch('http://192.168.10.5:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
      );
      const data = await response.json();
      if (data.error) {
        Alert.alert(
          'Faliure',
          data.error,
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        );
      } else {
        await AsyncStorage.setItem('token', data.token);
        props.navigation.replace("Homee");
      }
    } catch (error) {
      Alert.alert(
        'Faliure',
        error.message,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="transparent" /> */}
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
        secureTextEntry={showPassword}
      />
      <TouchableOpacity
        onPress={toggleShowPassword}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'rgba(0,0,0,0.7)' }}>
          Show Password
        </Text>
        {showPassword ? (
          <Icon
            name="eye-slash"
            size={20}
            color="rgba(0,0,0,0.7)"
            style={{ marginLeft: 10 }}
          />
        ) : (
          <Icon
            name="eye"
            size={20}
            color="rgba(0,0,0,0.7)"
            style={{ marginLeft: 10 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Sign Up")} >
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
  }, showPasswordButton: {
    paddingLeft: '85%',
    paddingTop: 5
  }
});

export default SignInScreen;