/**
 * Created by xiaoming on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import MyToast from '../views/MyToast';


export default class MyToastTest extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Button
                    onPress={()=>{
                        MyToast.showSuccessToast('显示成功啦')
                    }}
                    title={'显示Toast1'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        MyToast.showErrorToast('请显示正确的Toast')
                    }}
                    title={'显示Toast2'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        MyToast.showToast('这是普通的Toast')
                    }}
                    title={'显示Toast3'}
                    color={Theme.primaryColor}/>
            </View>
        )
    }
}