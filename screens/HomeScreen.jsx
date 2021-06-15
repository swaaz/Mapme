import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import StartTrackingFooter from './StartTrackingFooter';
import TrackFooterCard from './TrackFooterCard';
import * as Location from "expo-location";
// import useLocation from '../hooks/useGeoLocation';
import {Timer} from 'react-native-stopwatch-timer';


const HomeScreen = ({navigation}) => {
    // const data = useLocation();
    // console.log(data);

    const [isTracking, setIsTracking] = useState(false);
    const [getCurrentLocation, setCurrentLocation] = useState({
        latitude: 0.0 ,
        longitude: 0.0,
    })
    const [coordinates, setCoordinates] = useState([]);

   
    const startTrack = () => {
        setIsTracking(true)
        setCoordinates( prev => [...prev, getCurrentLocation] );
    };
    const EndTrack = () => {
        setIsTracking(false);
        navigation.navigate('ShowMap', { currentLocation : getCurrentLocation, coordinates : coordinates });
    };
    

    useEffect(() => {
        _getLocationAsync = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let locations = await Location.watchPositionAsync({ accuracy: Location.Accuracy.High  }, (loc) => {
                setCurrentLocation({
                    latitude : loc.coords.latitude,
                    longitude : loc.coords.longitude,
                })
                if(isTracking) setCoordinates( prev => [...prev, {
                    latitude : loc.coords.latitude,
                    longitude : loc.coords.longitude
                }] );
            }
            );
          };
          _getLocationAsync();
    },[])

    const Berlin = {
        latitude: 52.5200066,
        longitude: 13.404954
      };
    
      const Frankfurt = {
        latitude: 50.1109221,
        longitude: 8.6821267
      };
      console.log('lat')
      console.log(getCurrentLocation);
      console.log('coords' )
      console.log(coordinates);
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

                  
                    {/* <Polyline 
                    coordinates={[Berlin, Frankfurt]}
                    strokeWidth={6} 
                    strokeColor="#e03e3e" // fallback for when `strokeColors` is not supported by the map-provider

                    /> */}

                    {/* <Marker
                        coordinate={{ latitude: getCurrentLocation.latitude, longitude: getCurrentLocation.longitude }}
                        pinColor="green"
                        /> */}

            {/* {
                coordinates.map((item, key) =>
                    <Text key={key} >{item}</Text>
                )
            } */}
            </View>
            {
                isTracking?
                    <TrackFooterCard setIsTracking={EndTrack} isTracking={isTracking} />
                :
                    <StartTrackingFooter setIsTracking={startTrack} />
            }
            
        </SafeAreaView>
    )
}

export default HomeScreen

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
