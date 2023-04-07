import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Main")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up to my App!</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={newText => setEmail(newText)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={newText => setPassword(newText)}
            />
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'rgba(0,0,0,0.7)' }}>
                    Forget Password.?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
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
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#00d278',
        padding: 10,
        width: '90%'
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

export default SignUpScreen;