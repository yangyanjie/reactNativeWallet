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










/****
 * 每一个女孩一生都会遇到两个男孩，一个惊艳了时光，一个温柔了岁月。
 * 南乔遇见林一阳，是她命定的劫数，而遇见季子瑜便是她的救赎。
 * 遇见你，我便输了所有；
 * 南乔站在熙熙攘攘的街道上，看着对面学校熠熠生辉的几个大字-‘K市一高’，心里有写激动，想到这个地方就是自己未来三年将要呆的地方，心里又有些期待。南乔小心的躲避着过往的车辆，等到顺利到达马路对面的时候背上已经冒出了冷汗，心想：‘下次打死也不能这样了，太危险了，吓死我了’。
 * 看着旁边拎着大包小包的送孩子入学的家长，南乔想起了自己的爸爸，早上很早都来到这，把东西放下就走了，心里不免有些失望。她漂亮的眸子瞬间失去了光彩，连浅浅的笑都
 * 
 * 
 * 
 * 
 * 高中第一天，我进班的比较晚，教师的前面坐满了人，又看到老同学小鱼在向我打招呼，看到小鱼旁边还有空位置，就坐到了她旁边
 * 
 */