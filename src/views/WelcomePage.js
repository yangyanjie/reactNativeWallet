import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import NavigatorUtil from '../util/NavigatorUtil';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide();
            NavigatorUtil.resetToHomePage({
                navigation: this.props.navigation
            })
        }, 500);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
    
}

export default WelcomePage;