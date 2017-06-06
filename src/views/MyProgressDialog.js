/**
 * Created by xiaoming on 2017/6/2.
 * 调用原生的加载框
 */
import {
    NativeModules,
    Platform
} from 'react-native';

let MyProgressDialog = {
    //显示dialog
    show(data){
        if (Platform.OS == 'ios') {

        } else {
            NativeModules.MyProgressDialog.showMyProgressDialog(data);
        }
    },

    //隐藏dialog
    cancel(){
        if (Platform.OS == 'ios') {

        } else {
            NativeModules.MyProgressDialog.cancel();
        }
    },
};
export default MyProgressDialog;