import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.section}>
                <View style={styles.form}>
                    <TextInput style={styles.inputs} placeholder='username' />
                    <TextInput style={styles.inputs} placeholder='First Name' />
                    <TextInput style={styles.inputs} placeholder='Last Name' />
                    <TextInput style={styles.inputs} placeholder='Email' />
                    <TextInput style={styles.inputs} secureTextEntry={true} placeholder='password' />
                    <TextInput style={styles.inputs} secureTextEntry={true} placeholder='confirm password' />
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
    section: {
        height: '80vh',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: '100px',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    header: {
        fontSize: '40px',
        letterSpacing: '1px',
        color: 'white',
        marginTop: '40px'

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
        marginBottom: '15px'
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
