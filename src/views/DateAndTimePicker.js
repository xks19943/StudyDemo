/**
 * Created by xiaoming on 2017/6/2.
 * 调用原生的DateAndTimePicker
 */
import {
    NativeModules,
    Platform
} from 'react-native';
let DateAndTimePicker = {
    DateTimePick(callback){
        if (Platform.OS == 'android') {
            NativeModules.DateTime.launchDateTimePicker((res) => {
                callback(res.date + " "
                    + (res.hour < 10 ? "0" + res.hour : res.hour) + ":"
                    + (res.mins < 10 ? "0" + res.mins : res.mins) + ":00");
            });
        } else {

        }
    },
    DatePick(callback) {
        if (Platform.OS == 'android') {
            NativeModules.DateTime.launchDatePicker((res) => {
                callback(res.date);
            });
        } else {


        }
    },
    TimePick(callback) {
        if (Platform.OS == 'android') {
            NativeModules.DateTime.launchTimePicker((res) => {
                callback((res.hour < 10 ? "0" + res.hour : res.hour) + ":"
                    + (res.mins < 10 ? "0" + res.mins : res.mins) + ":00");
            });
        } else {

        }
    },
};

export default DateAndTimePicker;