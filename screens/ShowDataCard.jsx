import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HistoryContext } from '../Context/HistoryContext';
import { formatTime } from '../utils';

const ShowDataCard = (props) => {
    

    return (
        <View style={styles.footer}>
        <View style={styles.rowOne}>
            <Image
                source={require('../assets/icons/timer.png')}
                style={styles.timer}
            />
            <Text style={styles.time}>{formatTime(props.timer)}</Text>
            
        </View>
        <View style={styles.rowTwo}>
            <View style={styles.colOne}>
                <Text style={styles.category}>Avg Speed</Text>
                <View style={styles.values}>
                    <Text style={styles.valueOne}>{props.speed}</Text>
                    <Text style={styles.valueTwo}>KMPH</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.colOne}>
                <Text style={styles.category}>Distance</Text>
                <View style={styles.values}>
                    <Text style={styles.valueOne}>{props.distance}</Text>
                    <Text style={styles.valueTwo}>KM</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.colOne}>
                <Text style={styles.category}>Temperature</Text>
                <View style={styles.values}>
                    <Text style={styles.valueOne}>{props.temp}</Text>
                    <Text style={styles.valueTwo}>°C</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity
            onPress={props.saveHandler}
        >
            <View style={styles.circle}>
                <Image
                        source={require('../assets/icons/tick.png')}
                        style={styles.close}
                    />
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ShowDataCard

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
        fontSize : 25,
        fontWeight : "700",
        marginVertical : 10
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
        marginBottom : -10,
        backgroundColor : 'white',
        elevation : 5
    },
    close : {
        width: 20,
        height: 20
    }
})
