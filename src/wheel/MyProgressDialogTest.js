/**
 * Created by xiaoming on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import MyProgressDialog from '../views/MyProgressDialog';


export default class MyProgressDialogTest extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Button
                    onPress={()=>{
                        MyProgressDialog.showMyProgressDialog('正在加载中..........')
                    }}
                    title={'显示加载框'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        MyProgressDialog.cancelMyProgressDialog()
                    }}
                    title={'隐藏加载框'}
                    color={Theme.primaryColor}/>
            </View>
        )
    }
}