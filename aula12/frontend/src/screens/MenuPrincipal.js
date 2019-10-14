import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'

const drawerNavigation = createDrawerNavigator({
    Home
});

export default createAppContainer(drawerNavigation);