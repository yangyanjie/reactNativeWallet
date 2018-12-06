import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer,
    SafeAreaView,
    DrawerItems
} from 'react-navigation';
import React, {Component} from 'react';
import {
    Image,
    Linking,
    TouchableOpacity,
    ScrollView
} from 'react-native';
// 引入页面；
import CreateWallet from '../views/CreateWallet/CreateWallet';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import ManageWallet from '../views/ManageWallet/ManageWallet';
import ImportWallet from '../views/ImportWallet/ImportWallet';
import Scan from '../views/Scan/Scan';


// 创建抽屉navigator；
const DrawerNav = createDrawerNavigator({
    CreateWallet: {
        screen: CreateWallet,
        navigationOptions:{
        drawerLabel: '创建钱包',
        drawerIcon: ({tintColor}) => (
            <Image/>
        )
        }
        
    },
    ImportWallet: {
        screen: ImportWallet,
        navigationOptions:{
        drawerLabel: '导入钱包',
        drawerIcon: ({tintColor}) => (
            <Image/>
        )
        }
        
    },
    ManageWallet: {
        screen: ManageWallet,
        navigationOptions:{
        drawerLabel: '管理钱包',
        drawerIcon: ({tintColor}) => (
            <Image/>
        )
        }
        
    },
    Scan: {
        screen: Scan,
        navigationOptions:{
        drawerLabel: '少一少',
        drawerIcon: ({tintColor}) => (
            <Image/>
        )
        }
        
    },
    About: {
        screen: About,
        navigationOptions:{
        drawerLabel: '关于我们',
        drawerIcon: ({tintColor}) => (
            <Image/>
        )
        }
        
    },
    Home: {
        screen: CreateWallet,
    }
    },{
    // 自定义抽屉；
    contentComponent: (props) => (
        <ScrollView style={{backgroundColor: 'red',flex:1}}>
            <SafeAreaView forceInset={{top:'always',horizontal: 'never'}}>
                <DrawerItems
                {...props}
                />
            </SafeAreaView>
        </ScrollView>
    )
})
const StackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    CreateWallet: {
        screen: CreateWallet,
        navigationOptions: {
            header: null
        }
    }
    // DrawerNav: {
    //     screen: DrawerNav,
    //     navigationOptions: {
    //       title: 'This is DrawerNavigator'
    //     }
    //   }
    
})

export const AppNavigator =  createAppContainer(StackNavigator);