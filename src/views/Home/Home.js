import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    Button,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isOpen: false
        }
    }
    _renderItem(item) {
        return (
            <View style={styles.coinItem}>
                <View style={styles.coinL}>
                    <Image style={styles.coinImg}
                        source={item.coinImg}/>
                    <Text style={styles.coinTxt}>{item.coinTxt}</Text>
                </View>
                <Text style={styles.coinNum}>{item.coinNum}</Text>       
            </View>
        )
    }
    loadingData() {
        setTimeout(() => {
            this.setState(() => {
                isLoading: true
            })
        })
        
    }
    
    render() {
        const {navigation} = this.props;
        const menu = <View style={styles.menuContainer}>
                        <TouchableOpacity 
                            style={styles.menuItem}
                            onPress={() => {
                                navigation.navigate('CreateWallet');
                            }}
                        >
                            <Image
                                style={styles.itemTabImg}
                                source={require('../../assets/images/drawer-wallet-import.png')}
                            />
                            <Text style={styles.itemTabTxt}>导入钱包</Text>
                        </TouchableOpacity>
                    </View>;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}                     //抽屉内的组件
                openMenuOffset={210}     //抽屉的宽度
                dgeHitWidth={60}              //距离屏幕多少距离可以滑出抽屉,默认60
                disableGestures={false}        //是否禁用手势滑动抽屉 默认false 允许手势滑动
                menuPosition={'right'}
                // style={{backgroundColor: '#000000',paddingTop: 100}}
            >
                <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('CreateWallet')
                        }}
                    >
                        <Image 
                            style={styles.back}
                            source={require('../../assets/images/wallet-index-back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>钱包主页</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isOpen: true
                            })
                        }}
                    >
                        <Image 
                            style={styles.drawerBtn}
                            source={require('../../assets/images/wallet-index-drawer.png')}
                        />
                    </TouchableOpacity>
                </View>
                <ImageBackground 
                    style={styles.headerBack}
                    source={require('../../assets/images/wallet-index-headerbg.png')} >
                    <View style={styles.headerCommon}>
                        <Image 
                            style={styles.headerImg}
                            source={require('../../assets/images/header-img-1.png')}
                        />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.walletName}>ZRS1818</Text>
                        <Text style={styles.backBtn}>请备份</Text>
                    </View>
                    <View style={styles.headerQr}>
                    <Text style={styles.headerAddr}>0xf8c0...44E9dC6cE2</Text>
                        <TouchableOpacity>
                            <Image 
                                style={styles.qrImg}
                                source={require('../../assets/images/wallet-index-qrcode.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.walletTap}>
                        <TouchableOpacity style={styles.tabItem}>
                            <Image
                            style={styles.tapImg} 
                            source={require('../../assets/images/transfer-accounts.png')}/>
                            <Text style={styles.tabTxt}>转账</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem}>
                            <Image
                            style={styles.tapImg} 
                            source={require('../../assets/images/receivables.png')}/>
                            <Text style={styles.tabTxt}>收钱</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.coinsContainer}>
                    <FlatList
                        data={[
                            {coinImg: require('../../assets/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},
                            {coinImg: require('../../assets/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},{coinImg: require('../../assets/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},{coinImg: require('../../assets/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'}
                        ]}
                        renderItem={({item}) => this._renderItem(item)}
                        // 自定义loading 样式
                        refreshControl = {
                            <RefreshControl 
                                title={"loading"}
                                colors={['red']}// andriod
                                tintColor = {['#eee']} // ios
                                titleColor= {'#eee'}// ios
                                refreshing={this.state.isLoading}
                                onRefresh={() => {
                                    this.loadingData();
                                }}

                            />
                        }
                        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                        />
                </View>
            </View>
           </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
        width: '100%',
        height: 52,
        backgroundColor: '#2C333A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    back: {
        width: 20,
        height: 20
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    drawerBtn: {
        width: 20,
        height: 20
    },
    headerBack: {
        // flex: 1,
        width: '100%',
        height: 222,
        flexDirection: 'column',
        
    },
    headerCommon: {
        width: '100%',
        height: 92, 
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 32, 
        //backgroundColor: 'yellow'
    },
    headerImg: {
        width: 60,
        height: 60,
        alignItems: 'center'
    },
    headerText: {
        width: '100%',
        height: 24,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red'
    },
    walletName: {
        height: 16,
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 16,
        // backgroundColor: 'orange'
    },
    backBtn: {
        height: 14,
        marginLeft: 10,
        fontSize: 10,
        fontWeight: '400',
        color: '#FF6348',
        borderWidth: 1,
        borderColor: '#FF6348',
        borderRadius: 2
        
    },
    headerQr: {
        width: '100%',
        height: 24,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    headerAddr: {
        height: 12,
        fontSize: 11,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 12,
    },
    qrImg: {
        width: 12,
        height: 12,
        marginLeft: 6,
        // alignItems: 'center'
    },
    walletTap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 62,
        paddingRight: 62,
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor:'#000',
        shadowOffset:{h:5,w:2},
        shadowRadius:3,
        shadowOpacity:0.5,
    },
    tabItem: {
       width: 44,
       height: 74,
    //    backgroundColor: 'red'
    },
    tapImg: {
        width: 44,
        height: 44,
    },
    tabTxt: {
        height: 30,
        fontSize: 14,
        fontWeight: '400',
        color: '#222',
        lineHeight: 30,
        textAlign: 'center',
        // backgroundColor: 'green'
    },
    coinsContainer: {
        paddingTop: 46,
        // height: 200,
        // backgroundColor: 'green'
    },
    coinItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
        height: 75,
        // borderWidth: 1,
        // borderColor: '#E1E4E3',
        // backgroundColor: 'red'

    },
    separator: {
        marginLeft: 40,
        marginRight: 40,
        height: 1,
        backgroundColor: '#E1E4E3',
        // flex: 1
    },
    coinL: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 86,
        height: 42,
        // backgroundColor: 'yellow'
    },
    coinImg: {
        width: 42,
        height: 42
    },
    coinTxt: {
        height: 42,
        fontSize: 14,
        fontWeight: '400',
        color: '#222',
        lineHeight: 42,
    },
    coinNum: {
        
        height: 42,
        fontSize: 16,
        fontWeight: '900',
        color: '#222',
        lineHeight: 42,
        // textAlign: 'center',
    },
    menuContainer: {
       paddingTop: 72,
    },
    menuItem: {
        paddingLeft: 30,
        width: '100%',
        height:50,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemTabImg: {
        width: 20,
        height: 20
    },
    itemTabTxt: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: '400',
        color: '#8D979F'
    }
  
});

export default Home;