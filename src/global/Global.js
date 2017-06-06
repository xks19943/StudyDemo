/**
 * Created by 明明 on 2017/5/26.
 */
import React,{Component} from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';

global.ScreenWidth = Dimensions.get('window').width;
global.ScreenHeight = Dimensions.get('window').height;
global.Theme = {
    primaryDarkColor:'#33b589',
    primaryColor:'#5cb589',
    primaryTextColor:'#333333',
    normalTextColor:'#555555',
    grayTextColor:'#888888',
    bgColor:'#f2f2f2',
    diverColor:'#eeeeee',
    whiteColor:'#fff'
};

global.FontSize = {
    large:20,
    primary:17,
    normal:15,
    small:12,
};

global.SDKSupport_Android_StatusBar = false;
global.StatusHeight = 24;

global.GlobalPixelRatio = PixelRatio.get();

global.getSmallDP = (dp) => {
    if (dp * GlobalPixelRatio < 1) {
        return 1.0 / GlobalPixelRatio;
    } else {
        return dp;
    }
}

global.iosStatusBar = (color)=> {/**/
    if (Platform.OS == 'ios') {
        if (color) {
            return (
                <View style={{height: 20, width: ScreenWidth, backgroundColor: color}}/>
            );
        } else {
            return (
                <View style={{height: 20, width: ScreenWidth}}/>
            );
        }
    }
}