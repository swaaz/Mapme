import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import HistoryCard from './HistoryCard'

const History = () => {
    const datas = [1,2,3,4,5 ,6,6,6,6,6,6,6]
    return (
        <View style={styles.section}>
            <Text style={styles.title}>History</Text>
            <FlatList
            style={styles.list}
            data={datas}
            renderItem={() => <HistoryCard />}
            />
        </View>
    )
}

export default History;

const styles = StyleSheet.create({
    section: {
        flex: 1,
        height: 100,
        alignItems: 'center'

    },
    title : {
        fontSize: 30,
        paddingVertical: 20,
    },
    list: {
        height: 100,
        flex: 1,
    }

})
