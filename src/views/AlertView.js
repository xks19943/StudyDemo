/**
 * Created by xiaoming on 2017/6/2.
 */
import React, {Component} from 'react';
import {Platform, NativeModules, AlertIOS} from 'react-native';

/**
 *
 * 各种样式对话框
 *
 *
 * 演示代码

 最后一个参数为android是否可以取消dialog？

 //单标题，单按钮
 AlertViews.showMyDialogOnlyTitle("标题", () => {
            console.log("one title click");
        },true/false);
 //单标题，单按钮
 AlertViews.showMyDialogDoubleTitle("标题", "子标题", () => {
            console.log("click");
        },true/false);
 //单标题，双按钮
 AlertViews.showMyDialogWithTwoBtn("标题", "左按钮", "右按钮", () => {
            console.log("zuo");
        }, () => {
            console.log("you");
        },true/false);
 //双标题，双按钮
 AlertViews.showMyDialogWithDoubleTitleDoubleBtn("标题", "子标题", "左按钮", "右按钮", () => {
            console.log("zuo");
        }, () => {
            console.log("you");
        },true/false);

 */

let AlertView = {
    //单标题，单按钮
    showMyDialogOnlyTitle(title, callback, isCancel){
        if (Platform.OS == 'android') {
            NativeModules.MyDialog.showMyDialogOnlyTitle({title: title, isCancel: isCancel}, callback);
        } else {
            AlertIOS.alert(
                "",
                title,
                [
                    {
                        text: '我知道了', onPress: () => {
                        callback();
                    }
                    },
                ]
            )
        }
    },
    //单标题，单按钮
    showMyDialogDoubleTitle(title, subtitle, callback, isCancel){
        if (Platform.OS == 'android') {
            NativeModules.MyDialog.showMyDialogDoubleTitle({
                title: title,
                desc: subtitle,
                isCancel: isCancel
            }, callback);
        } else {
            AlertIOS.alert(
                title,
                subtitle,
                [
                    {
                        text: '我知道了', onPress: () => {
                        callback()
                    }
                    },
                ]
            )
        }
    },
    //单标题，双按钮
    showMyDialogWithTwoBtn(title, leftbtn, rightbtn, callback_left, callback_right, isCancel){
        if (Platform.OS == 'android') {
            NativeModules.MyDialog.showMyDialogWithTwoBtn({
                    title: title,
                    left: leftbtn,
                    right: rightbtn,
                    isCancel: isCancel
                },
                (res) => {
                    if (res.hasOwnProperty('rightBtn')) {
                        callback_right();
                    } else if (res.hasOwnProperty('leftBtn')) {
                        callback_left();
                    }
                });
        } else {
            AlertIOS.alert(
                '',
                title,
                [
                    {
                        text: leftbtn, onPress: () => {
                        callback_left();
                    }
                    },
                    {
                        text: rightbtn, onPress: () => {
                        callback_right();
                    }
                    }
                ]
            )
        }
    },
    //双标题，双按钮
    showMyDialogWithDoubleTitleDoubleBtn(title, subtitle, leftbtn, rightbtn, callback_left, callback_right, isCancel){
        if (Platform.OS == 'android') {
            NativeModules.MyDialog.showMyDialogWithDoubleTitleDoubleBtn({
                title: title,
                desc: subtitle,
                left: leftbtn,
                right: rightbtn,
                isCancel: isCancel
            }, (res) => {
                if (res.hasOwnProperty('rightBtn')) {
                    callback_right();
                } else if (res.hasOwnProperty('leftBtn')) {
                    callback_left();
                }
            });
        } else {
            AlertIOS.alert(
                title,
                subtitle,
                [
                    {
                        text: leftbtn, onPress: () => {
                        callback_left();
                    }
                    },
                    {
                        text: rightbtn, onPress: () => {
                        callback_right();
                    }
                    }
                ]
            )
        }

    }
}
export default AlertView;