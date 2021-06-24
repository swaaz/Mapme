import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Geocoder from 'react-native-geocoder';

const HistoryCard = (props) => {
    
    const tapHandler = () => {
        props.navigation.navigate('ShowHistoryMap',{ data : props.item});
    }
    return (
        <TouchableOpacity
            onPress={tapHandler}
        >
            <View style={styles.card}>
                <View style={styles.column}>
                    <Text style={styles.date}>{props.item.item.dateTime.day}</Text>
                    <Text style={styles.date}>{props.item.item.dateTime.month}</Text>
                    <Text style={styles.time}>{props.item.item.dateTime.hour}:{props.item.item.dateTime.minutes}</Text>
                </View>
                <Text style={styles.title}>Attavar, Mangalore</Text>
                <Text style={styles.distance}>{props.item.item.distance} KM</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth : 1,
        borderColor : 'grey',
        marginHorizontal : '10%',
        elevation : 1
    },
    column: {
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    date : {
        fontWeight: 'bold',
        fontSize: 12
    },
    time: {
        fontSize: 10
    },
    title : {
        fontWeight: '100',
        flex: 1,
        textAlign: 'center'
    },
    distance: {
        fontWeight: '900',
        paddingHorizontal: 10
    }
})
