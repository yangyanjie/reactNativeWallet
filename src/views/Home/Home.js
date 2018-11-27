import React, {Component} from 'react';
// import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {StyleSheet, Text, View, Image, Button,TouchableOpacity} from 'react-native';


 class Home extends Component {
    constructor(props) {
        super(props);
        this.handleDrawerTap = this.handleDrawerTap.bind(this);
        this.state = {
            word: ''
        }
    }
    static navigationOptions = {
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
            onPress={this.handleDrawerTap}>
                <Image
                    style={{width: 20, height: 20,marginRight: 14}}
                    source={require('../../assets/images/wallet-index-drawer.png')}
                    />
            </TouchableOpacity>
            
        ),
        headerLeft: (
            <TouchableOpacity
            onPress={() => alert('This is a button!')}>
                <Image
                    style={{width: 10, height: 18,marginLeft: 14}}
                    source={require('../../assets/images/wallet-index-back.png')}
                    />
            </TouchableOpacity>
          ),
    }; 
    handleDrawerTap() {
        alert(33333);
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}
            onPress={() => {}}>Welcome to Home!</Text>
            <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('CreateWallet')}
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;