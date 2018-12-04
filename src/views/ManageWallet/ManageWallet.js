import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View
} from 'react-native';

 class ManageWallet extends Component {
  constructor(props) {
        super(props);
        this.state = {}
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ManageWallet!</Text>
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

export default ManageWallet;