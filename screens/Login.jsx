import React from 'react'
import { Button, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
            source={require('../assets/icons/logo.png')}
            style={styles.logo}
            />
            <View style={styles.section}>
                <Text style={styles.header}>login</Text>
                <KeyboardAvoidingView behavior="padding" >
                    <View style={styles.form}>
                        <TextInput style={styles.inputs} placeholder='username' />
                        <TextInput style={styles.inputs} secureTextEntry={true} placeholder='password' />
                        <TouchableOpacity style={styles.submit} >
                            <Text style={styles.submitText}>login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
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
    logo:{
        width: 100,
        height: 100,
        marginTop: '30%'
    },
    section: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    header: {
        fontSize: 40,
        letterSpacing: 1

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
        // height: 50
    },
    submit : {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 15,
        // marginBottom: 100
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
