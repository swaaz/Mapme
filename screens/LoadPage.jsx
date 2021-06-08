import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LoadPage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icons/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>MapMe</Text>
            <Text style={styles.footer}>Built on earth by ❤️ </Text>
        </View>
    )
}

export default LoadPage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292929',
        width: 100,
    },
    logo:{
        width: 60,
        height: 60,
    },
    title:{
        color: 'white',
        fontSize: 20,
        marginVertical: 20
    },
    footer:{
        color: 'white',
        position: 'absolute',
        bottom: 20
    }
})
