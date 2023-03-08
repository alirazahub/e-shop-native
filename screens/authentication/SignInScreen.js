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
        <Text>sa</Text>
      </View>
      <View style={{ flex: 0.20 }}>
        <Text>sa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    fontSize:40,
    fontWeight:'bold',
    color:'red',
    alignSelf:'center',
    borderWidth:1,
    paddingVertical:5,
    paddingHorizontal:25,
    marginTop:7,
    borderRadius:30
  },
  input: {
    padding: 10,
    width: '90%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
});

export default SignInScreen;