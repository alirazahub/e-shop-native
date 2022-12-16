import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';

const SignUpScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const onSubmit = async () => {
        try {
            const response = await fetch('http://192.168.10.8:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
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
                Alert.alert(
                    'Success',
                    'You have successfully signed up!',
                    [
                        { text: 'Go to Sign In', onPress: () => props.navigation.navigate("signin") },
                    ],
                    { cancelable: false }
                );
                setName('');
                setEmail('');
                setPassword('');
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
            <StatusBar backgroundColor="transparent" />
            <Text style={styles.title}>Sign up to my App!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={value => setName(value)}
            />
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
            <TouchableOpacity onPress={() => onSubmit()} style={styles.button}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("signin")} >
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