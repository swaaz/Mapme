import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import TrackFooterCard from './TrackFooterCard';


const ShowMap = ({navigation}) => {
    const coordinates = navigation.getParam('coordinates');
    const getCurrentLocation = navigation.getParam('currentLocation');
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
                    showsUserLocation
                    followsUserLocation
                    region={{
                        latitude: getCurrentLocation.latitude,
                        latitudeDelta: 0.001,
                        longitude: getCurrentLocation.longitude,
                        longitudeDelta: 0.001
                    }}
                >
                </MapView>

                    
                    {/* // initialRegion={{
                    // latitude: currentLocation.coordinates.latitude,
                    // longitude: currentLocation.coordinates.longitude,
                    // latitudeDelta: 0.1,
                    // longitudeDelta: 0.1
                    // }} */}

                  
                    <Polyline 
                    coordinates={coordinates}
                    strokeWidth={6} 
                    strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider

                    />

    

    
            </View>
          
            <TrackFooterCard  />
           
            
        </SafeAreaView>
    )
}

export default ShowMap

const styles = StyleSheet.create({
    home : {
        width: '100%',
        flex: 1,

    },
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

        alignItems : 'center',
        justifyContent : 'center'
    },
    map : {
        ...StyleSheet.absoluteFillObject,
    },
})
