/**
 * Created by liaoye on 2016/8/4.
 * 学习DatePickerAndroid的项目
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    DatePickerAndroid,
    TouchableOpacity,
} from 'react-native';

import CustomButton from './CustomButton';

export default class DatePickerAndroidDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            presetDate: new Date(2016, 3, 5),
            allDate: new Date(2020, 4, 5),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今日再早',
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/5',
        };
    }
    //进行创建时间日期选择器
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }


    render(){
        return(
            <View style={{flex:1,backgroundColor: Theme.bgColor}}>
                <CustomButton text={this.state.simpleText}
                              onPress={()=>this.showPicker('simple', {date: new Date()})}/>
                <CustomButton text={this.state.presetText}
                              onPress={()=>this.showPicker('preset', {date: this.state.presetDate})}/>
                <CustomButton text={this.state.minText}
                              onPress={()=>this.showPicker('min', {
                                  date: this.state.minDate,
                                  minDate: new Date()
                              })}/>
                <CustomButton text={this.state.maxText}
                              onPress={()=>this.showPicker('max', {
                                  date: this.state.maxDate,
                                  maxDate: new Date()
                              })}/>
            </View>
        );
    }
}
