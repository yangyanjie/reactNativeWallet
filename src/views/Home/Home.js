import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

 class Home extends Component {
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
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
        ),
        headerLeft: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
      };
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
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