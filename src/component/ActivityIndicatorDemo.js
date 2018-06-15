/**
 * Created by liaoye on 2016/8/4.
 * 圆形加载条的使用
 * http://reactnative.cn/docs/0.44/activityindicator.html#content
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    ToastAndroid,
    StyleSheet,
    ActivityIndicator
} from 'react-native';


export default class ActivityIndicatorDemo extends Component{

    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor,alignItems:'center',justifyContent: 'center'}}>
                <ActivityIndicator
                    style={{margin: 10}}
                    animating={true}
                    color={Theme.primaryColor}
                    size="small"/>
                <ActivityIndicator
                    style={{margin: 10}}
                    animating={true}
                    color={Theme.primaryColor}
                    size="large"/>
            </View>
        );

    }
}

