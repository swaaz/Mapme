import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native'
import MapView, { Polyline } from 'react-native-maps';
import StartTrackingFooter from './StartTrackingFooter';
import TrackFooterCard from './TrackFooterCard';
import * as Location from "expo-location";
// import useLocation from '../hooks/useGeoLocation';
import {haversine} from 'haversine';
import useTimer from '../hooks/useTimer';
import Header from './Header';

const HomeScreen = ({navigation}) => {
    const { timer, handleStart, handleReset } = useTimer(0);

    const [isTracking, setIsTracking] = useState(false);
    const [prevCoords, setPrevCoords] = useState({});
    const [ track , setTrack ] = useState({
        distance : 0.0,
        speed : 0
    });
    const [getCurrentLocation, setCurrentLocation] = useState({
        latitude: 0.0 ,
        longitude: 0.0,
    })
    const [coordinates, setCoordinates] = useState([]);
    const [weather, setWeather] = useState({
        temperature : 0.0,
        loaded : false,
    });
    // getLoc = async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //       setErrorMsg('Permission to access location was denied');
    //       return;
    //     }
  
    //     let locations = await Location.watchPositionAsync({ accuracy: Location.Accuracy.High,distanceInterval: 1  }, (loc) => console.log(loc));
    // };

    const _watchLocationAsync = async () => {
        console.log('tracking');
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let locations = await Location.watchPositionAsync({ accuracy: Location.Accuracy.High,distanceInterval: 1  }, (loc) => {
            console.log(loc.coords);
            console.log(isTracking);
        });
    };

            // setCurrentLocation({
            //     latitude : loc.coords.latitude,
            //     longitude : loc.coords.longitude,
            // })
            // console.log(`${isTracking} outside`);
            // if(isTracking) {
            //     console.log('tracking');
            //     setCoordinates( prev => [...prev, {
            //         latitude : loc.coords.latitude,
            //         longitude : loc.coords.longitude
            //     }] );
            //     setTrack(prev => ({
            //         ...prev,
            //         distance : prev.distance + haversine(prevCoords, { latitude : loc.coords.latitude, longitude : loc.coords.longitude }),
            //         speed : prev.distance / (timer * 3600)
            //     }));
                // setPrevCoords({ latitude : loc.coords.latitude, longitude : loc.coords.longitude });
            
        
       
     

    const startTrack = () => {
        setCoordinates( [getCurrentLocation] );
        setIsTracking(true);
        setPrevCoords(getCurrentLocation);
        handleStart();


    };
    const EndTrack = () => {
        setIsTracking(false);
        navigation.navigate('ShowMap', { currentLocation : getCurrentLocation, coordinates : coordinates, timer : timer, track : track, temperature : weather.temperature });
        handleReset();
        setCoordinates([]);
    };

    
    
    _getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({  accuracy: Location.Accuracy.High });
        // this.setState({ location });
        console.log(location);
        setCurrentLocation({
            latitude : location.coords.latitude,
            longitude : location.coords.longitude
        });
    };
  
    useEffect(() => {
        console.log('elepahnt');
        _getLocationAsync();
          if(!weather.loaded){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getCurrentLocation.latitude}&lon=${getCurrentLocation.longitude}&units=metric&appid=`)
            .then((response) => response.json())
            .then((json) => setWeather({ temperature : json.main.temp, loaded : true}))
            .catch((error) => console.error(error))
          }
          _watchLocationAsync();

    },[])

    // console.log(isTracking);
     return(
        <SafeAreaView style={styles.home}>
            <Header navigation={navigation} />
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
                    {/* <Polyline
                    coordinates={coordinates}
                    strokeWidth={6} 
                    strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider

                    /> */}
                
                </MapView>

                
            </View>
            {
                isTracking?
                    <TrackFooterCard setIsTracking={EndTrack} isTracking={isTracking} track={track} setTrack={setTrack} timer={timer} weather={weather}  />
                :
                    <StartTrackingFooter setIsTracking={startTrack}  />
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
