import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState, createContext, useEffect} from 'react';


export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        (async () =>{
            try {
                const value = await AsyncStorage.getItem('History')
                if(value !== null) {
                   setHistory(JSON.parse(value));
                }
                } catch(e) {
                   setHistory([]);
                }
        })();
    }, [])

 
    const setUpdate = async(value) => {
        setHistory((prev) => [...prev, value]);
        let historyArray = [];
        try{
            let storedHistory = await AsyncStorage.getItem('History');
            if(storedHistory !== null){
                historyArray = JSON.parse(storedHistory);
            }
            historyArray.push(value);
            await AsyncStorage.setItem('History', JSON.stringify(historyArray));
        }
        catch{
            console.log('error', value);
        }
    }
 
    return(
        <HistoryContext.Provider value={[history , setUpdate]}>
            {props.children}
        </HistoryContext.Provider>
    );
}