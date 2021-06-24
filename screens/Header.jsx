import React from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = ({navigation}) => {
    return (
        <View style={styles.header} >
            <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            >
                <Image
                    source={require('../assets/icons/menu1.png')}
                    style={styles.menu}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/icons/run.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/icons/Tomas.png')}
                style={styles.profile}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : {
        position: 'absolute',
        width: '100%',
        height: 70,
        top: StatusBar.currentHeight,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '100%',
        paddingHorizontal : 15,
        // backgroundColor : 'pink',
        zIndex : 1
        
    },
    menu : {
        width: 27,
        height: 27,
    },
    logo : {
        width: 30,
        height: 30,
        marginLeft: 25
    },
    profile : {
        width: 55,
        height: 55
    },
})
