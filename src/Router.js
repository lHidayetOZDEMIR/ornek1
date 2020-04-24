import React from 'react';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Deneme from './pages/Deneme';

const AppSwitchNavigator = createSwitchNavigator(
    {

        Welcome: {
            screen: Welcome
        },
        Signin: {
            screen: Signin
        },
        Login: {
            screen: Login
        },
        Home:{
            screen: Home
        },
        Deneme:{
            screen: Deneme
        }
    },
    {
        initialRouteName: 'Welcome'
    }
);

export default createAppContainer(AppSwitchNavigator);