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
    },
    ImportWallet: {
        screen: ImportWallet,
        navigationOptions: {
            header: null
        }
    },
    ManageWallet: {
        screen: ManageWallet,
        navigationOptions:(props) =>  {
            const {navigation} = props;
            return {
                title: '管理钱包',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => {
                            // 页面跳转
                           //navigation.back();
                        }}>
                        <Image 
                            style={{marginLeft:16, width: 20,height: 20}}
                            source={require('../assets/images/back-left.png')}/>
                    </TouchableOpacity>
                
                ),
                headerTintColor: '#222',
                headerTitleStyle: {
                    fontSize:17,
                    fontWeight: 'bold',
                },
            }
        }
    },
    Scan: {
        screen: Scan,
        navigationOptions: {
            header: null
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: '管理钱包'
        }
    }
    
})

export const AppNavigator =  createAppContainer(StackNavigator);