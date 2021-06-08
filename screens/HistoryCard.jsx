import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const HistoryCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.column}>
                <Text style={styles.date}>23</Text>
                <Text style={styles.date}>Jun</Text>
                <Text style={styles.time}>23:00</Text>
            </View>
            <Text style={styles.title}>Attavar, Mangalore</Text>
            <Text style={styles.distance}>1.5 mi</Text>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        border: '1px solid grey',
        width: 80,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10
    },
    column: {
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    date : {
        fontWeight: 700,
        fontSize: 12
    },
    time: {
        fontSize: 10
    },
    title : {
        fontWeight: 60,
        flex: 1,
        textAlign: 'center'
    },
    distance: {
        fontWeight: 900,
        paddingHorizontal: 10
    }
    
})
