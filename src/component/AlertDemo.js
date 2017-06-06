/**
 * Created by liaoye on 2016/8/4.
 * 对话框的使用
 * http://reactnative.cn/docs/0.44/alert.html#content
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    ToastAndroid,
    StyleSheet,
    Alert
} from 'react-native';
import CustomButton from './CustomButton';

export default class AlertDemo extends Component{

    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <CustomButton text='点击弹出默认Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}/>

                <CustomButton text='点击弹出两个按钮的Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                                  {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消~',ToastAndroid.SHORT)},
                                  {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定~',ToastAndroid.SHORT)}
                              ],{
                                  onDismiss:()=>ToastAndroid.show('你点击了外面消失~',ToastAndroid.SHORT)
                              },{
                                  cancelable: true
                              })}/>

                <CustomButton text='点击弹出三个按钮的Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                                  {text:'One',onPress:()=>ToastAndroid.show('你点击了One~',ToastAndroid.SHORT)},
                                  {text:'Two',onPress:()=>ToastAndroid.show('你点击了Two~',ToastAndroid.SHORT)},
                                  {text:'Three',onPress:()=>ToastAndroid.show('你点击了Three~',ToastAndroid.SHORT)}
                              ],{
                                  cancelable: false   //此时不能够调用onDismiss方法 onDismiss是等于监听外面的点击事件并且消失
                              })}/>


            </View>
        );

    }
}

