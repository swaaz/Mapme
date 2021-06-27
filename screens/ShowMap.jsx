import React, { useContext } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { HistoryContext } from '../Context/HistoryContext';
import ShowDataCard from './ShowDataCard';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ShowMap = ({navigation}) => {
    const coordinates = navigation.getParam('coordinates');
    const getCurrentLocation = navigation.getParam('currentLocation');
    const timer = navigation.getParam('timer');
    const track = navigation.getParam('track');
    const temp = navigation.getParam('temperature');

    const [history, setUpdate] = useContext(HistoryContext);
    const date = new Date;
    const saveHandler = () => {
        setUpdate({
            location : {
                lat: getCurrentLocation.latitude,
                lng : getCurrentLocation.longitude
            },
            time : timer,
            distance : track.distance,
            speed : track.speed,
            temperature : temp,
            dateTime : {
                day : date.getDate(),
                month : months[date.getMonth()],
                hour : date.getHours(),
                minutes : date.getMinutes()
            },
            coordinates : coordinates
        });
        navigation.navigate('HomeScreen');
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
                        latitude: getCurrentLocation.latitude,
                        latitudeDelta: 0.01,
                        longitude: getCurrentLocation.longitude,
                        longitudeDelta: 0.01
                    }}
                >
                    <Polyline
                    coordinates={coordinates}
                    strokeWidth={6} 
                    strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider

                    />
                </MapView>

    

    
            </View>
          
    <ShowDataCard timer={timer} speed={track.speed} distance={track.distance} temp={temp} saveHandler={saveHandler} />
           
            
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
