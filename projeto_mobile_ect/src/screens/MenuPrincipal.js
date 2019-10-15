import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastro from './Cadastro'

const drawerNavigation = createDrawerNavigator({
    Home,
    Cadastro
});

export default createAppContainer(drawerNavigation);