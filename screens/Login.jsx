import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/icons/logo.png')}
            style={styles.logo}
            />
            <View style={styles.section}>
                <Text style={styles.header}>login</Text>
                <View style={styles.form}>
                    <TextInput style={styles.inputs} placeholder='username' />
                    <TextInput style={styles.inputs} secureTextEntry={true} placeholder='password' />
                    <TouchableOpacity style={styles.submit} >
                        <Text style={styles.submitText}>login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footer}>Don't have an account? Sign In!</Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100vh',
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        width: '100px',
        height: '100px',
        marginTop: '20vh'

    },
    section: {
        height: '50vh',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: '100px',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    header: {
        fontSize: '40px',
        letterSpacing: '1px'

    },
    form: {
        height: '10vh',
        justifyContent: 'space-around'
    },
    inputs: {
        marginVertical: '15px',
        border: '1px solid #cacaca',
        padding: '7px',
        borderRadius: '5px'
    },
    submit : {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: '5px',
        marginTop: '15px',
        marginBottom: '100px'
    },
    submitText : {
        color: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical : '10px'

    },
    footer: {
        position: 'absolute',
        bottom: '10px'
    }
    
})
