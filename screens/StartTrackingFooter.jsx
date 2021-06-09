import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StartTrackingFooter = (props) => {
    return (
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
            <TouchableOpacity
                onPress={props.setIsTracking}
            >
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
    )
}

export default StartTrackingFooter;

const styles = StyleSheet.create({
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
