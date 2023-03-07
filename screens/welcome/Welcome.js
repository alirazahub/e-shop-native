import React from 'react'
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native'

const Welcome = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Welcome Screen for my E SHOP</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Sign In")}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sign Up")}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00d278',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: '10%',
        textAlign: 'center',
    }
})