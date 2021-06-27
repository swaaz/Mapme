import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import ShowDataCard from './ShowDataCard';
import TrackFooterCard from './TrackFooterCard';


const ShowHistoryMap = ({navigation}) => {
    const data = navigation.getParam('data');

    const saveHandler= () =>{
        navigation.navigate('History');
    }
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
                    source={require('../assets/icons/Tomas.png')}
                    style={styles.profile}
                />
            </View>
            <View style={styles.maps}>
                <MapView
                    style={styles.map}
                    // showsUserLocation
                    followsUserLocation
                    region={{
                        latitude: data.item.coordinates[0].latitude,
                        latitudeDelta: 0.001,
                        longitude: data.item.coordinates[0].longitude,
                        longitudeDelta: 0.001
                    }}
                >
                
                  
                    <Polyline
                    coordinates={data.item.coordinates}
                    strokeWidth={6} 
                    strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider

                    />
                </MapView>

    

    
            </View>
          
            <ShowDataCard saveHandler={saveHandler} timer={data.item.time} speed={data.item.speed} distance={data.item.distance} temp={data.item.temperature} />
           
            
        </SafeAreaView>
    )
}

export default ShowHistoryMap

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
        width: 55,
        height: 55
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
