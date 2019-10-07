import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from "./src/screens/LoginScreen";

const mainNavigation = createStackNavigator({
    LoginScreen
});

export default createAppContainer(mainNavigation);
