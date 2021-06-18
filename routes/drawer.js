import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack";
import HistoryStack from "./HistoryStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AuthStack
    },
    History : {
        screen : HistoryStack
    }
});

export default createAppContainer(RootDrawerNavigator);