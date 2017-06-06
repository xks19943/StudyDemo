/**
 * Created by 明明 on 2017/5/26.
 * 文档地址：
 * http://reactnative.cn/docs/0.44/button.html#content
 */
import React,{Component} from 'react';
import {
    Button,
    View
} from 'react-native';

export default class ButtonDemo extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor: Theme.bgColor}}>
                <Button
                    onPress={()=>this.onClick()}
                    title={'按钮一'}
                    color={Theme.primaryColor}
                    accessibilityLabel={'残疾人士读屏识别'}/>

                <Button
                    onPress={()=>this.onNoClick()}
                    disabled={true}
                    title={'按钮二'}
                    color={Theme.primaryColor}
                    accessibilityLabel={'不可点击'}/>
            </View>
        )
    }

    onClick(){
        console.log('点击了按钮一');
    }

    onNoClick(){
        console.log('点击了按钮二');
    }
}