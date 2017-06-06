/**
 * Created by liaoye on 2016/8/4.
 * 粘贴板的使用
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Clipboard,
    ToastAndroid,
    StyleSheet
} from 'react-native';
import CustomButton from './CustomButton';

export default class ClipboardDemo extends Component{

    //设置剪切的内容 需在异步执行 类似于java的子线程执行 然后在主线程获取数据
    async getClipboardContent(){
        try {
            var content = await Clipboard.getString();
            ToastAndroid.show('粘贴板的内容为:'+content,ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show(e.message,ToastAndroid.SHORT);
        }
    }

    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <CustomButton
                    text="点我复制一段文本"
                    onPress={()=>{
                        Clipboard.setString('Welcome to ReactNative')
                    }}/>
                <CustomButton
                    text="获取复制的文本"
                    onPress={()=>{
                       this.getClipboardContent()
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome:{
        fontSize:20,
        backgroundColor:'#3142f5',
        color:'#fff'
    }
})