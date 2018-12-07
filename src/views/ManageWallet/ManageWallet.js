import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    FlatList,
    Image
} from 'react-native';

 class ManageWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  _renderItem(item) {
    return (
        <View style={styles.walletItem}>
            <View style={styles.itemTop}>
              <View style={styles.itemTopL}>
                <Image style={styles.headerImg}
                  source={item.headerImg}/>
                  <View>
                    <View>
                      <Text style={styles.account}></Text>
                      <Text style={styles.backup}></Text>
                    </View>
                    <Text style={styles.address}></Text>
                  </View>
                
              </View>
              <View style={styles.itemTop}></View>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.itemBot}></View>
        </View>
    )
}
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
              {headerImg: require('../../assets/images/header-img-1.png'),coinTxt: 'GFC',account: '我是小钱包',backup: 0,banlance: '16.978'},
              {headerImg: require('../../assets/images/header-img-1.png'),coinTxt: 'GFC',account: '我是小钱包',backup: 0,banlance: '16.978'},
              {headerImg: require('../../assets/images/header-img-1.png'),coinTxt: 'GFC',account: '我是小钱包',backup: 0,banlance: '16.978'},
          ]}
          renderItem={({item}) => this._renderItem(item)}
          // // 自定义loading 样式
          // refreshControl = {
          //     <RefreshControl 
          //         title={"loading"}
          //         colors={['red']}// andriod
          //         tintColor = {['#eee']} // ios
          //         titleColor= {'#eee'}// ios
          //         refreshing={this.state.isLoading}
          //         onRefresh={() => {
          //             this.loadingData();
          //         }}

          //     />
          // }
          // ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#EDF1F0'
  },
  walletItem: {
    marginBottom: 20,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  itemTop: {
    height: 72
    
  },
  separator: {
    height: 1,
    backgroundColor: '#E1E4E3',
  },
  itemTopL: {
    
  }
});

export default ManageWallet;