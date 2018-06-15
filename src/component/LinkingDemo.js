/**
 * Created by liaoye on 2016/8/26.
 *学习Linking api的用法
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    Linking,
    ToastAndroid
} from 'react-native';

import CustomButton from './CustomButton';


export default class LinkingDemo extends Component{

    openLink(url){
        Linking.canOpenURL(url).then(supported=>{
            if(supported){
                Linking.openURL(url);
            }else{
                ToastAndroid.show("不能打开连接"+url,ToastAndroid.LONG);
            }
        });
    }

    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('捕捉的URL地址为: ' + url);
            }
        }).catch(err => console.error('错误信息为:', err));
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor: Theme.bgColor}}>
                <CustomButton text={'打开http连接'}
                              onPress={this.openLink.bind(this,('http://www.lcode.org'))}/>
                <CustomButton text={'打开https连接'}
                              onPress={this.openLink.bind(this,('https://www.baidu.com'))}/>
                <CustomButton text={'发送短信'}
                              onPress={this.openLink.bind(this,('smsto:10086'))}/>
                <CustomButton text={'拨打电话'}
                              onPress={this.openLink.bind(this,('tel:10086'))}/>
                <CustomButton text={'发送邮件'}
                              onPress={this.openLink.bind(this,('mailto:1185078115@qq.com'))}/>
            </View>
        );
    }
}