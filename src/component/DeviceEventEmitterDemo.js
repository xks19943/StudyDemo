/**
 * Created by liaoye on 2016/10/21.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter,
    Alert
} from 'react-native';

import CustomButton from './CustomButton';


export default class DeviceEventEmitterDemo extends Component{

    //这里发送事件(数据)
    registEvent(){
        DeviceEventEmitter.emit('sendEvent','好好学习,天天向上!');
    }

    componentDidMount(){
        this.listener = DeviceEventEmitter.addListener('sendEvent',function (data) { //监听事件
            Alert.alert(data);
        })
    }

    componentWillUnmount(){
        this.listener.remove();  //移除对事件的监听
    }

    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <CustomButton text={'发送事件'} onPress={()=>this.registEvent()}/>
            </View>
        )
    }
}