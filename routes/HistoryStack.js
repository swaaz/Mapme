import { createStackNavigator } from 'react-navigation-stack';
import History from '../screens/History';
import ShowHistoryMap from '../screens/ShowHistoryMap';

const screens = {
    History : {
        screen : History,
        navigationOptions : {
            headerShown : false
        }
    },
    ShowHistoryMap : {
        screen : ShowHistoryMap,
        navigationOptions : {
            headerShown : false
        }
    }

}

const HistoryStack = createStackNavigator(screens);

export default HistoryStack;