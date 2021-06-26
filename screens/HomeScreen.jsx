import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native'
import MapView, { Polyline } from 'react-native-maps';
import StartTrackingFooter from './StartTrackingFooter';
import TrackFooterCard from './TrackFooterCard';
import * as Location from "expo-location";
import useTimer from '../hooks/useTimer';
import Header from './Header';
const haversine = require('haversine');
import { getPreciseDistance } from 'geolib';

const HomeScreen = ({navigation}) => {
    const { timer, handleStart, handleReset } = useTimer(0);

    const [isTracking, setIsTracking] = useState(false);
    const [prevCoords, setPrevCoords] = useState({});
    const [ track , setTrack ] = useState({
        distance : 0,
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
        setTrack({
            distance : 0.0
        });
    };

    _getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({  accuracy: Location.Accuracy.High });
        setCurrentLocation({
            latitude : location.coords.latitude,
            longitude : location.coords.longitude
        });
    };
    const _watchLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let locations = await Location.watchPositionAsync({ accuracy: Location.Accuracy.High, distanceInterval: 1  }, (loc) => {
          setCurrentLocation({
                latitude : loc.coords.latitude,
                longitude : loc.coords.longitude,
            })
            if(isTracking) {
                setCoordinates( prev => [...prev, {
                    latitude : loc.coords.latitude,
                    longitude : loc.coords.longitude
                }] );
                let distanceCalculated = getPreciseDistance( prevCoords , { latitude: loc.coords.latitude, longitude: loc.coords.longitude } ) / 1000;
                if(loc.coords.speed > 0) setTrack(prev => ({ speed : Math.round((prev.speed + loc.coords.speed) / 2), distance : distanceCalculated }));
                setPrevCoords({ latitude : loc.coords.latitude, longitude : loc.coords.longitude });
            }
        });

    };


    useEffect(() => {
        setCoordinates([]);
        setPrevCoords(getCurrentLocation);
        setTrack({
            distance : 0.0,
            speed : 0.0
        });
        if(!weather.loaded){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getCurrentLocation.latitude}&lon=${getCurrentLocation.longitude}&units=metric&appid=`)
            .then((response) => response.json())
            .then((json) => setWeather({ temperature : json.main.temp, loaded : true}))
            .catch((error) => console.error(error))
        }
        _getLocationAsync();
        _watchLocationAsync();

    },[isTracking])
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
                    <Polyline
                    coordinates={coordinates}
                    strokeWidth={6} 
                    strokeColor="black" 

                    />

                </MapView>

            </View>
            {
                isTracking?
                    <TrackFooterCard setIsTracking={EndTrack} isTracking={isTracking} track={track} distance={track.distance} setTrack={setTrack} timer={timer} weather={weather}  />
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
