import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

const HomePage = () => {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pets Store</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText1}>{`Your Email is: ${email}`}</Text>
                <Text style={styles.bodyText}>Welcome to the Pets Ecommerce Store! We have a wide range of products for all your pet needs. Whether you need a food, toy, or even a new pet, we have you covered.</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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