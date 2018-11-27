import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/views/Home/Home';
import CreateWallet from './src/views/CreateWallet/CreateWallet';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  CreateWallet: {
    screen: CreateWallet
  },

},{
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
