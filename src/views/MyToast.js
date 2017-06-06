/**
 * Created by xiaoming on 2017/6/2.
 * 调用原生的Toast
 */
import {
    NativeModules,
    Platform
} from 'react-native';

let MyToast = {
    /**
     * 显示正确图标的Toast
     * @param msg
     */
    showSuccessToast(msg){
        if(Platform.OS == 'ios'){

        }else{
            NativeModules.MyToast.showSuccessToast(msg)
        }
    },

    /**
     * 显示带错误图标的Toast
     * @param msg
     */
    showErrorToast(msg){
        if(Platform.OS == 'ios'){

        }else{
            NativeModules.MyToast.showErrorToast(msg)
        }
    },

    /**
     * 显示不带图标的Toast
     * @param msg
     */
    showToast(msg){
        if(Platform.OS == 'ios'){

        } else {
            NativeModules.MyToast.showToast(msg)
        }
    }


};
export default MyToast;