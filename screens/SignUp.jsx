import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    section: {
        height: '80%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    header: {
        fontSize: 40,
        letterSpacing: 1,
        color: 'white',
        marginTop: 40

    },
    form: {
        // height: 10,
        justifyContent: 'space-around'
    },
    inputs: {
        marginVertical: 15,
        borderWidth: 1,
        borderColor : '#cacaca',
        padding: 7,
        borderRadius: 5,
        width: 250,
    },
    submit : {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 15,
        // marginBottom: 15
    },
    submitText : {
        color: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical : 10

    },
    footer: {
        position: 'absolute',
        bottom: 10
    }
    
})
