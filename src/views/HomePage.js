import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    View,
    Text
} from 'react-native';

import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import NavigationBar from '../common/NavigationBar';
import ThemeColor from '../expand/ThemeColor';
import {ThemeFlags} from '../../static/styles/ThemeFactory';
 class Home extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            theme: new ThemeColor().getHeaderTheme(ThemeFlags.Black,ThemeFlags.White)
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
            <TouchableOpacity >
                <Image 
                    style={styles.image}
                    source={require('../../static/images/wallet-index-drawer.png')}/>
            </TouchableOpacity>
        )
    }
    render() {
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
                    <TouchableOpacity style={styles.tabItem}>
                        <Image
                        style={styles.tapImg} 
                        source={require('../../static/images/receivables.png')}/>
                        <Text style={styles.tabTxt}>收钱</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        return (
            <SafeAreaViewPlus
                topColor={this.state.theme.themeColor}
                bottomInset={false}
            >
                {navigationBar}
                {walletIndex}
                
            </SafeAreaViewPlus>
        
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
        elevation: 4
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
    
  
});

export default Home;