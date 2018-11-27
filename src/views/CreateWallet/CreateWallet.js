import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

 class CreateWallet extends Component {
  constructor(props) {
        super(props);
        this.state = {}
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to CreateWallet!</Text>
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

export default CreateWallet;