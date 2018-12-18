import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import SafeAreaViewPlus from '../common/SafeAreaViewPlus';

 class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaViewPlus
                bottomInset={false}
            >
                <View style={styles.container}>
                    <Text>HomePPage</Text>
                </View>
            </SafeAreaViewPlus>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
  
});

export default Home;