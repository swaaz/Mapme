import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native'
import MapView, { Polyline } from 'react-native-maps';
const HomeScreen = () => {
    const Berlin = {
        latitude: 52.5200066,
        longitude: 13.404954
      };
    
      const Frankfurt = {
        latitude: 50.1109221,
        longitude: 8.6821267
      };
    return (
        <SafeAreaView style={styles.home}>
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
            <View style={styles.maps}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 52.5200066,
                longitude: 13.404954,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
                }}
            >
                {/* <Polyline 
                coordinates={[Berlin, Frankfurt]}
                strokeWidth={6} 
                strokeColor="#e03e3e" // fallback for when `strokeColors` is not supported by the map-provider
                
                /> */}
            </MapView>

            
            </View>

            <View style={styles.footer}>
                <View style={styles.rowOne}>
                    <TouchableOpacity>
                        <View style={styles.circleButtons}>
                            <Image
                                source={require('../assets/icons/history.png')}
                                style={styles.history}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.circleButtons}>
                            <Image
                                source={require('../assets/icons/location.png')}
                                style={styles.location}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.rowTwo}>
                        <Image
                            source={require('../assets/icons/walk.png')}
                            style={styles.walk}
                        />
                        <Text style={styles.startTracking}>Start Tracking</Text>
                        <Image
                            source={require('../assets/icons/navigation.png')}
                            style={styles.navigation}
                        />
                    </View>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    home : {
        width: '100%',
        flex: 1,

    },
    // header : {
    //     flexDirection : 'row',
    //     justifyContent: 'space-between',
    //     alignItems : 'center',
    //     width: '100%',
    //     paddingHorizontal : 15,
    //     marginTop: StatusBar.currentHeight,
    //     paddingBottom: 10,
    //     backgroundColor : 'white'
        
    // },
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
        height: 30
    },
    profile : {
        width: 30,
        height: 30
    },
    maps: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    map : {
        ...StyleSheet.absoluteFillObject,
    },
    footer : {
        position: 'absolute',
        width: '100%',
        height: 130,
        bottom: 20,
        paddingHorizontal: 20,
        justifyContent : 'space-around'

    },
    rowOne: {
        width: '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    circleButtons : {
        width: 50,
        height: 50,
        borderRadius : 50/2 ,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center'
    },
    history : {
        width: 20,
        height: 20
    },
    location :  {
        width: 20,
        height: 20
    },
    rowTwo : {
        width: '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : 'white',
        borderRadius : 30,
        paddingHorizontal : 20,
        paddingVertical : 10
    },
    walk : {
        width: 20,
        height: 20
    },
    navigation : {
        width: 40,
        height: 40
    },
    startTracking : {
        fontSize : 20
    }
})
