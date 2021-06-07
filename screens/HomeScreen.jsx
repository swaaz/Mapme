import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import MapboxGL from "@react-native-mapbox-gl/maps";

// MapboxGL.setAccessToken("pk.eyJ1Ijoic3dhYXoiLCJhIjoiY2s3cDRsd3E4MGYxeTNtczNjd21qNTkzcyJ9.Ppkd8lxRwfyBejr3BUmTRQ");

const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <View style={styles.header} >
                <TouchableOpacity>
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
                source={require('../assets/icons/profile.png')}
                style={styles.profile}
                />
            </View>
            {/* <MapboxGL.MapView style={styles.map} /> */}
            <View style={styles.footer}>
                footer
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    home : {
        width: '100%',
        height: '100vh',
        flex: 1,

    },
    header : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '100%',
        paddingHorizontal : '15px',
        paddingVertical: '10px'
    },
    menu : {
        width: '30px',
        height: '30px'
    },
    logo : {
        width: '30px',
        height: '30px'
    },
    profile : {
        width: '35px',
        height: '35px'
    },
    map: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    footer : {
        position: 'absolute',
        width: '100%',
        height: '50px',
        backgroundColor: 'pink',
        bottom: '30px'

    }
})
