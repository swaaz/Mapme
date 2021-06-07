import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
const screens = {
    HomeScreen : {
        screen : HomeScreen,
        navigationOptions : {
            header : null
        }
    },
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    },
    SignUp : {
        screen: SignUp,
        navigationOptions : {
            header : null
        }
    },
    
    
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);