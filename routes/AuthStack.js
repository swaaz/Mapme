import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import ShowMap from '../screens/ShowMap';
import LoadPage from '../screens/LoadPage';

const screens = {
    LoadPage : {
        screen : LoadPage,
        navigationOptions : {
            headerShown : false
        }
    },
    HomeScreen : {
        screen : HomeScreen,
        navigationOptions : {
            headerShown : false
        }
    },
    ShowMap : {
        screen : ShowMap,
        navigationOptions : {
            headerShown : false
        }
    },
    SignUp : {
        screen: SignUp,
        navigationOptions : {
            headerShown : false
        }
    },
    Login : {
        screen : Login,
        navigationOptions : {
            headerShown : false
        }
    },
    
    
}

const AuthStack = createStackNavigator(screens);

export default AuthStack;