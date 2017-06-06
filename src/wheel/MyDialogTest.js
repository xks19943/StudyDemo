/**
 * Created by xiaoming on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import AlertView from '../views/AlertView';


export default class MyDialogTest extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Button
                    onPress={()=>{
                        AlertView.showMyDialogOnlyTitle('这是只有一个标题和一个按钮',()=>{

                        },true);
                    }}
                    title={'显示对话框1'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        AlertView.showMyDialogDoubleTitle('头标题','这是有两个标题和一个按钮',()=>{

                        },true);
                    }}
                    title={'显示对话框2'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                         AlertView.showMyDialogWithTwoBtn('这是只有一个标题和两个按钮','取消','确定',()=>{

                        },()=>{

                        },true);
                    }}
                    title={'显示对话框3'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                         AlertView.showMyDialogWithDoubleTitleDoubleBtn('大大的标题','这是有两个标题和两个按钮','取消','确定',()=>{

                        },()=>{

                        },true);
                    }}
                    title={'显示对话框4'}
                    color={Theme.primaryColor}/>
            </View>
        )
    }
}