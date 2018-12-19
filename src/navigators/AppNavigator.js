import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
// import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
// 引入页面；
import CreateWallet from '../views/CreateWallet/CreateWallet';
//import Home from '../views/Home/Home';
import About from '../views/About';
import ManageWallet from '../views/ManageWallet/ManageWallet';
import ImportWallet from '../views/ImportWallet/ImportWallet';

import WelcomePage from '../views/WelcomePage';
import HomePage from '../views/HomePage';
import Scan from '../views/Scan';
import ReceiveAccount from '../views/ReceiveAccount';



const StackNavigator = createStackNavigator({
    
    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },
    CreateWallet: {
        screen: CreateWallet
    },
    ImportWallet: {
        screen: ImportWallet
    },
    About: {
        screen: About,
    },
    ReceiveAccount: {
        screen: ReceiveAccount,
    },
    
    ManageWallet: {
        screen: ManageWallet,
        
    },
    Scan: {
        screen: Scan,
       
    },
    
    
},{
    defaultNavigationOptions: {
        header:null
    }
})

export const AppNavigator =  createAppContainer(StackNavigator);