import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
                <View style={styles.col}>
                    <Text style={styles.subTag}>Avg. Speed</Text>
                    <View style={styles.tagRow}>
                        <Text style={styles.tagValue}>{props.item.item.speed}</Text>
                        <Text style={styles.unit}>KMPH</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <Text style={styles.subTag}>Distance</Text>
                    <View style={styles.tagRow}>
                        <Text style={styles.tagValue}>{props.item.item.distance}</Text>
                        <Text style={styles.unit}>KM</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <Text style={styles.subTag}>Temperature</Text>
                    <View style={styles.tagRow}>
                        <Text style={styles.tagValue}>{props.item.item.temperature}</Text>
                        <Text style={styles.unit}>°C</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth : 1,
        borderColor : 'grey',
        marginHorizontal : '7%',
        elevation : 1,
        justifyContent : 'space-evenly'

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
    col : {
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    subTag : {
        fontSize : 13
    },
    tagRow : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'flex-end',
    },
    tagValue : {
        fontSize : 30,
        fontWeight : 'normal'
    },
    unit : {
        fontSize : 10,
        marginBottom : 5,
        marginLeft : 2
    }
})
