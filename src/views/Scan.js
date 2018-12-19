import React, {Component} from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    Image,
    Text, 
    View,
    Animated,
    Easing
} from 'react-native';
import { RNCamera } from 'react-native-camera'; 
import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import ThemeColor from '../expand/ThemeColor';
import {ThemeFlags} from '../../static/styles/ThemeFactory';
import NavigationBar from '../common/NavigationBar';
 class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: new ThemeColor().getHeaderTheme(ThemeFlags.Black,ThemeFlags.White),
      moveAnim: new Animated.Value(0)
    }
  }
  componentDidMount() {
    this.startAnimation();
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
startAnimation = () => {
  this.state.moveAnim.setValue(0);
  Animated.timing(
      this.state.moveAnim,
      {
          toValue: -200,
          duration: 1500,
          easing: Easing.linear
      }
  ).start(() => this.startAnimation());
};
onBarCodeRead = (result) => {
  console.log(result);
  // const { navigate } = this.props.navigation;
  //        const {data} = result;
      // navigate('Sale', {
      //     url: data
      // })
};

  render() {
    let navigationBar = 
        <NavigationBar
            title={'扫码'}
            style={this.state.theme}
            leftButton={this.renderLeftButton()}
        />
        let content = 
        <View style={styles.container}>
            <RNCamera
              ref={ref => {
                  this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              onBarCodeRead={this.onBarCodeRead}
          >
              <View style={styles.rectangleContainer}>
                  <View style={styles.rectangle}/>
                  <Animated.View style={[
                      styles.border,
                      {transform: [{translateY: this.state.moveAnim}]}]}/>
                  <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
              </View>
            </RNCamera>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 20,
    height: 20

  },
});

export default Scan;