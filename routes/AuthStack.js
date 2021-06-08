import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
const screens = {
    
    HomeScreen : {
        screen : HomeScreen,
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

export default createAppContainer(AuthStack);