import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { HistoryContext} from '../Context/HistoryContext';
import Header from './Header';
import HistoryCard from './HistoryCard'

const History = ({navigation}) => {
    const [history, setHistory] = useContext(HistoryContext);
    return (
        <>
        <Header navigation={navigation} />
        <View style={styles.section}>

            <Text style={styles.title}>History</Text>

            <FlatList
            style={styles.list}
            data={history.reverse()}
            renderItem={(item) => <HistoryCard navigation={navigation} item={item} />}
            />
        </View>
        </>
    )
}

export default History;

const styles = StyleSheet.create({
    section: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        width: '100%',
        marginTop : 70

    },
    title : {
        fontSize: 30,
        paddingVertical: 20,
    },
    list: {
        width: '100%',
        height: '100%',
        flex: 1,
        
        
    }

})
