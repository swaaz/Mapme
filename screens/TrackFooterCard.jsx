import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Stopwatch } from 'react-native-stopwatch-timer';

const TrackFooterCard = (props) => {
    
    return (
        <View style={styles.footer}>
            <View style={styles.rowOne}>
                <Image
                    source={require('../assets/icons/timer.png')}
                    style={styles.timer}
                />
                {/* <Text style={styles.time}>11:30</Text> */}
                <Stopwatch
                laps
                secs
                start={props.isTracking}
                //To start
                reset={!props.isTracking}
                //To reset
                options={options}
                //options for the styling
                onFinish={(time)=>console.log(time)}
                // getTime={(time) => {
                // console.log(time);
                // }}
            />
            </View>
            <View style={styles.rowTwo}>
                <View style={styles.colOne}>
                    <Text style={styles.category}>Speed</Text>
                    <View style={styles.values}>
                        <Text style={styles.valueOne}>45</Text>
                        <Text style={styles.valueTwo}>KMPH</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.colOne}>
                    <Text style={styles.category}>Distance</Text>
                    <View style={styles.values}>
                        <Text style={styles.valueOne}>45.5</Text>
                        <Text style={styles.valueTwo}>KM</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.colOne}>
                    <Text style={styles.category}>Temperature</Text>
                    <View style={styles.values}>
                        <Text style={styles.valueOne}>45.5</Text>
                        <Text style={styles.valueTwo}>°C</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={props.setIsTracking}
            >
                <View style={styles.circle}>
                    <Image
                            source={require('../assets/icons/close.png')}
                            style={styles.close}
                        />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TrackFooterCard

const styles = StyleSheet.create({
    footer : {
        position: 'absolute',
        width: '90%',
        height: 150,
        bottom: 50,
        paddingHorizontal: 20,
        justifyContent : 'space-around',
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 15,
        marginHorizontal : 20
    

    },
    rowOne : {
        paddingTop : 20,
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    timer : {
        width: 15,
        height: 15,
    },
    time : {
        fontSize : 30,
        fontWeight : "700"
    },
    rowTwo : {
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
        width: '100%',
    },
    colOne : {
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    category : {

        fontSize : 10
    },
    values : {
        alignItems : 'flex-start',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    valueOne : {
        fontSize : 20,
    },
    valueTwo : {
        fontSize : 7
    },
    line : {
        width: 2,
        backgroundColor : 'grey',
        height: 60,
        opacity: 50
        // flex: 1
    },
    circle : {
        width: 50,
        height: 50,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 25,
        marginBottom : -20,
        backgroundColor : 'white',
        elevation : 5
    },
    close : {
        width: 20,
        height: 20
    }
})

const options = {
    container: {
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: 'black',
      marginLeft: 7,
    },
  };
  