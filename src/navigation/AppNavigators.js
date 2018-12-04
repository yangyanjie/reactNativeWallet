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
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title: '钱包主页',
                headerStyle: {
                    height: 52,
                    backgroundColor: '#2C333A',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                headerRight: (
                    <TouchableOpacity
                    onPress={() => {
                    //    console.log(11111);
                    //    navigation.openDrawer();
                    //    // Linking.openURL('https://www.baidu.com/');
                    //     console.log(22222);
                    }}>
                        <Image
                            style={{width: 20, height: 20,marginRight: 14}}
                            source={require('../assets/images/wallet-index-drawer.png')}
                            />
                    </TouchableOpacity>
                    
                ),
                headerLeft: (
                    <TouchableOpacity
                    onPress={() => {}}>
                        <Image
                            style={{width: 10, height: 18,marginLeft: 14}}
                            source={require('../assets/images/wallet-index-back.png')}
                            />
                    </TouchableOpacity>
                  )


            }
        }
    },
    DrawerNav: {
        screen: DrawerNav,
        navigationOptions: {
          title: 'This is DrawerNavigator'
        }
      }
    
})

export const AppNavigator =  createAppContainer(StackNavigator);