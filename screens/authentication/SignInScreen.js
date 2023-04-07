import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignInScreen = ({ navigation }) => {
  const onSubmit = async () => {
    navigation.navigate("Main");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.20 }}>
        <Text style={styles.logo}>E SHOP</Text>
      </View>
      <View style={{ flex: 0.60 }}>
        <View>
          <Text style={{ marginHorizontal: 10, marginTop: 10, fontSize: 20, color: 'lightgreen', fontWeight: 'bold' }}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={{ marginHorizontal: 10, marginTop: 10, fontSize: 20, color: 'lightgreen', fontWeight: 'bold' }}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={onSubmit}
          >
            <Text style={{ textAlign: 'center', color: 'orange', fontWeight: 'bold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.20 }}>
        <Text>sa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'lightgreen',
    alignSelf: 'center',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginTop: 40,
    borderRadius: 30,
    borderColor: 'orange'
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 30,
    color: 'orange',
    fontSize: 20
  },
  btn: {
    padding: 10,
    margin: 10,
    width: 100,
    borderRadius: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  }
});

export default SignInScreen;