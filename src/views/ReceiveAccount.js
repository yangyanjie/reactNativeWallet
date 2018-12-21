import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    Button,
    Clipboard
} from 'react-native';
import QRCode from 'react-native-qrcode';

import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import ThemeColor from '../expand/ThemeColor';
import {ThemeFlags} from '../../static/styles/ThemeFactory';
import NavigationBar from '../common/NavigationBar';
 class ReceiveAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id,
            theme: new ThemeColor().getHeaderTheme(ThemeFlags.Black,ThemeFlags.White),
            isCopy: false,
            content: this.props.navigation.state.params.id
        }

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
    handleClipboard() {
        Clipboard.setString(this.state.id);
        this.setState({
            isCopy: true
        })
        Clipboard.getString().then((text) => {
        }).then((err) => {
        }) 
    }
  render() {
      let qrCode = 
        <QRCode
            value={this.state.id}
            size={150}
            bgColor='#000'
            fgColor='#fff'/>
    let navigationBar = 
        <NavigationBar
            title={'收款码'}
            style={this.state.theme}
            leftButton={this.renderLeftButton()}
        />
        let content = 
        <View style={styles.container}>
            <View style={styles.qrContainer}>
                <Image 
                    style={styles.headerImg} 
                    source={require('../../static/images/header-img-1.png')}
                />
                <Text style={styles.walletName}>ZRS1818</Text>
                <Text style={styles.address}>11111111111111111111111111</Text>
                <View style={styles.qrImg}>
                    {qrCode}
                </View>
                
                <TouchableOpacity
                    style={this.state.isCopy?styles.activeBtn:styles.defaultBtn}
                    onPress={this.handleClipboard.bind(this)}
                >
                    <Text style={{color: '#fff'}}>复制钱包地址</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    return (
        <SafeAreaViewPlus
            topColor={this.state.theme.themeColor}
            bottomInset={false}
        >
        {navigationBar}
        {content}
            
        </SafeAreaViewPlus>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C333A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 20,
    height: 20

    },
    qrContainer: {
        width: 325,
        height: 343,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center'
        
    },
    headerImg: {
        marginTop: -30,
        width: 60,
        height: 60
    },
    walletName: {
        paddingTop: 14,
        // height: 38,
        fontSize: 12,
        fontWeight: '400',
        color: '#222',
        // lineHeight: 24,  
    },
    address: {
        height: 20,
        fontSize: 9,
        fontWeight: '400',
        color: '#828B8A',
        lineHeight: 20, 
    },
    qrImg: {
        width: 158,
        height: 158,
        borderWidth: 4,
        borderColor: '#EEF3F1'
    },
    defaultBtn: {
        marginTop: 20,
        width: 270,
        height: 44,
        borderRadius: 5,
        backgroundColor:'#0DB95F',
        justifyContent: 'center',
        alignItems: 'center',
        //color: '#fff'
    },
    activeBtn: {
        marginTop: 20,
        width: 270,
        height: 44,
        borderRadius: 5,
        backgroundColor:'#E0E3E2',
        justifyContent: 'center',
        alignItems: 'center',
        //color: '#fff'
    }

});

export default ReceiveAccount;










