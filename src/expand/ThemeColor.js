/**
 * 定义主题颜色
 */
'use strict';

import {
  AsyncStorage,
} from 'react-native';
import ThemeFactory from '../../static/styles/ThemeFactory';
export default class ThemeDao{
    /**
   * 获取当前页面首部主题
   * @returns {Promise}
   */
  getHeaderTheme(themeFlag,titleFlag){
    return ThemeFactory.createTheme(themeFlag,titleFlag);
   }
}