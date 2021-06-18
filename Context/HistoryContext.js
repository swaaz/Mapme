import React,{useState, createContext} from 'react';


export const HistoryContext = createContext();

export const HistoryProvider = (props) => {


    const [history, setHistory] = useState([]);
 
    return(
        <HistoryContext.Provider value={[history , setHistory]}>
            {props.children}
        </HistoryContext.Provider>
    );
}