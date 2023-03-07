import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const SignUpScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up to my App!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'rgba(0,0,0,0.7)' }}>
                    Forget Password.?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Main")} style={styles.button}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sign In")} >
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