import React, { useState } from 'react';
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
import url from '../key';

const SignUpScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    const onSubmit = async () => {
        try {
            const response = await fetch(`${url}/api/signup`, {
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
                        { text: 'Go to Sign In', onPress: () => props.navigation.replace("signin") },
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
            {/* <StatusBar backgroundColor="transparent" /> */}
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
            <TouchableOpacity onPress={() => onSubmit()} style={styles.button}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Sign In")} >
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