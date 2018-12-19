import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ImageBackground,
    View,
    Text,
    FlatList,
    RefreshControl
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import NavigationBar from '../common/NavigationBar';
import ThemeColor from '../expand/ThemeColor';
import {ThemeFlags} from '../../static/styles/ThemeFactory';
 class Home extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            theme: new ThemeColor().getHeaderTheme(ThemeFlags.Black,ThemeFlags.White),
            isLoading: false,
            isOpen: false
        }
        console.log(this.state.theme);
    }
    renderLeftButton() {
        return (
            <TouchableOpacity>
                <Image 
                    style={styles.image}
                    source={require('../../static/images/wallet-index-back.png')}/>
            </TouchableOpacity>
        )
    }
    renderRightButton() {
        return (
            <TouchableOpacity 
                onPress={() => this.openDrawer()}
            >
                <Image 
                    style={styles.image}
                    source={require('../../static/images/wallet-index-drawer.png')}/>
            </TouchableOpacity>
        )
    }
    openDrawer() {
        this.setState({
            isOpen: true
        })
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
        let navigationBar = <NavigationBar
            title={'钱包主页'}
            style={this.state.theme}
            leftButton={this.renderLeftButton()}
            rightButton={this.renderRightButton()}
        />
        let walletIndex =  
            <ImageBackground 
                style={styles.headerBack}
                source={require('../../static/images/wallet-index-headerbg.png')} >
                    <Image 
                        style={styles.headerImg}
                        source={require('../../static/images/header-img-1.png')}
                    />
                <View style={styles.headerText}>
                    <Text style={styles.walletName}>ZRS1818</Text>
                    <Text style={styles.backBtn}>请备份</Text>
                </View>
                <View style={styles.headerQr}>
                    <Text style={styles.headerAddr}>0xf8c0...44E9dC6cE2</Text>
                    <TouchableOpacity>
                        <Image 
                            style={styles.qrImg}
                            source={require('../../static/images/wallet-index-qrcode.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.walletTap}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image
                        style={styles.tapImg} 
                        source={require('../../static/images/transfer-accounts.png')}/>
                        <Text style={styles.tabTxt}>转账</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.tabItem}
                        onPress={() => {
                            navigation.navigate('ReceiveAccount',{id: '1111111111111'})
                        }}>
                        <Image
                        style={styles.tapImg} 
                        source={require('../../static/images/receivables.png')}/>
                        <Text style={styles.tabTxt}>收钱</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        let coinsList = 
            <View style={styles.coinsContainer}>
                <FlatList
                    data={[
                        {coinImg: require('../../static/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},
                        {coinImg: require('../../static/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},{coinImg: require('../../static/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'},{coinImg: require('../../static/images/coin-GFC.png'),coinTxt: 'GFC',coinNum: '16.978'}
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
        let sidemenu = 
            <View style={styles.menuContainer}>
                <TouchableHighlight 
                    onPress={() => {
                        navigation.navigate('CreateWallet')
                    }}
                    activeOpacity={0.8}
                    underlayColor={'#EDF1F0'}
                >
                    <View 
                    style={styles.menuItem}>
                        <Image
                            style={styles.itemTabImg}
                            source={require('../../static/images/drawer-wallet-import.png')}
                        />
                        <Text style={styles.itemTabTxt}>导入钱包</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => {
                        navigation.navigate('ManageWallet')
                    }}
                    activeOpacity={0.8}
                    underlayColor={'#EDF1F0'}
                >
                    <View 
                    style={styles.menuItem}>
                        <Image
                            style={styles.itemTabImg}
                            source={require('../../static/images/drawer-wallet-manage.png')}
                        />
                        <Text style={styles.itemTabTxt}>管理钱包</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => {
                        navigation.navigate('Scan')
                    }}
                    activeOpacity={0.8}
                    underlayColor={'#EDF1F0'}
                >
                    <View 
                    style={styles.menuItem}>
                        <Image
                            style={styles.itemTabImg}
                            source={require('../../static/images/drawer-scan.png')}
                        />
                        <Text style={styles.itemTabTxt}>扫一扫</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => {
                        navigation.navigate('Scan')
                    }}
                    activeOpacity={0.8}
                    underlayColor={'#EDF1F0'}
                >
                    <View 
                    style={styles.menuItem}>
                        <Image
                            style={styles.itemTabImg}
                            source={require('../../static/images/drawer-about.png')}
                        />
                        <Text style={styles.itemTabTxt}>关于我们</Text>
                    </View>
                </TouchableHighlight>
            </View>;
        return (
            <SideMenu
                    menu={sidemenu}
                    isOpen={this.state.isOpen}                     //抽屉内的组件
                    openMenuOffset={210}     //抽屉的宽度
                    dgeHitWidth={60}              //距离屏幕多少距离可以滑出抽屉,默认60
                    disableGestures={false}        //是否禁用手势滑动抽屉 默认false 允许手势滑动
                    menuPosition={'right'}
                    style={{paddingTop: 100}}
                >
                <SafeAreaViewPlus
                    topColor={this.state.theme.themeColor}
                    bottomInset={false}
                >
                    {navigationBar}
                    {walletIndex}
                    {coinsList}
                    
                </SafeAreaViewPlus>
            </SideMenu>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 20,
        height: 20

    },
    headerBack: {
        paddingTop: 32,
        width: '100%',
        height: 222,
        flexDirection: 'column',
        alignItems: 'center'

        
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
        width: 335,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 62,
        paddingRight: 62,
        marginTop: 24,        
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor:'#000',
        shadowOffset:{h:5,w:2},
        shadowRadius:3,
        shadowOpacity:0.5,
        elevation: 4,
    },
    tabItem: {
       width: 44,
       height: 74,
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
        // backgroundColor: 'red',
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