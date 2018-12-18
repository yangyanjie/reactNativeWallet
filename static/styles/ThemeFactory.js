/**
 * 主题
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const ThemeFlags = {
    White:'#ffffff',
    Black: '#2C333A'
    
}

export default class ThemeFactory{
    /**
     * 创建一个主题样式
     * @param themeFlag 主题标识
     * @returns {{themeColor: *, styles: *}}
     */
    static createTheme(themeFlag,titleFalg){
        return {
            themeColor:themeFlag,
            styles:StyleSheet.create({
                selectedTitleStyle:{
                    color:themeFlag,
                },
                tabBarSelectedIcon:{
                    tintColor: themeFlag,
                },
                navBar:{
                    backgroundColor:themeFlag,
                },
                title: {
                    color: titleFalg
                }

            }),
        }

    }
}
