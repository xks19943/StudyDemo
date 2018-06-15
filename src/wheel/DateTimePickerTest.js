/**
 * Created by xiaoming on 2017/6/5.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import DateAndTimePicker from '../views/DateAndTimePicker';


export default class DateTimePickerTest extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Button
                    onPress={()=>{
                        DateAndTimePicker.DateTimePick((data)=>{
                            console.log(data);
                        })
                    }}
                    title={'DateTimePick'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        DateAndTimePicker.DatePick((data)=>{
                            console.log(data);
                        })
                    }}
                    title={'DatePick'}
                    color={Theme.primaryColor}/>
                <View style={{width: ScreenWidth,height:getSmallDP(1),backgroundColor: Theme.bgColor}}/>
                <Button
                    onPress={()=>{
                        DateAndTimePicker.TimePick((data)=>{
                            console.log(data);
                        })
                    }}
                    title={'TimePick'}
                    color={Theme.primaryColor}/>
            </View>
        )
    }
}