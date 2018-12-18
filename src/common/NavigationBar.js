import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    DeviceInfo,
    StatusBar
} from 'react-native';
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated?0:20;
class NavigationBar extends Component {
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false,
        },
    }
    constructor(props) {
        super(props);
        // 定义初始化数据：
        this.state = {
            title: '',
            hide: true
        }
        console.log(this.props);
    }
    getButtonElement(data) {
        return (
            <View style={styles.navBarButton}>
                {data? data : null}
            </View>
        );
    }
    render() {
        let titleView = this.props.titleView ? this.props.titleView :
        <Text ellipsizeMode="head" numberOfLines={1} style={[styles.title,this.props.style.styles.title]}>{this.props.title}</Text>;

    let content = this.props.hide ? null :
        <View style={styles.navBar}>
            {this.getButtonElement(this.props.leftButton)}
            <View style={[styles.navBarTitleContainer,this.props.titleLayoutStyle]}>
                {titleView}
            </View>
            {this.getButtonElement(this.props.rightButton)}
        </View>;
        return (
            <View style={[styles.container, this.props.style.styles.navBar]}>
                {content}
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196F3',
        paddingLeft: 12,
        paddingRight: 14,
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        //color: '#FFFFFF',
    },
    navBarButton: {
        alignItems: 'center',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:0,

    },
});

export default NavigationBar;

