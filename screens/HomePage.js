import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const HomePage = (props) => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        async function checkToken() {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('http://192.168.10.5:3000/check', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });
            const data = await response.json();
            console.log(data)
            setEmail(data.email);
        }
        checkToken();

    }, []);

    const hanldeLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            props.navigation.replace('Sign In');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pets Store</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText1}>{`Your Email is: ${email}`}</Text>
                <Text style={styles.bodyText}>Welcome to the Pets Ecommerce Store! We have a wide range of products for all your pet needs. Whether you need a food, toy, or even a new pet, we have you covered.</Text>
                {/* Button to logout */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                    }}
                    onPress={() => { hanldeLogout() }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    body: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    bodyText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bodyText1: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});

export default HomePage;