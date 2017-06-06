package com.liaoye.studydemo.toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by xiaoming on 2017/6/2.
 */

public class MyToastModule extends ReactContextBaseJavaModule {
    public MyToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyToast";
    }

    /**
     * 显示正确的Toast
     * @param msg
     */
    @ReactMethod
    public void showSuccessToast(String msg) {
        MyToast.showSuccessMsg(getCurrentActivity(), msg);
    }

    /**
     * 显示错误的Toast
     * @param msg
     */
    @ReactMethod
    public void showErrorToast(String msg) {
        MyToast.showErrorMsg(getCurrentActivity(), msg);
    }

    /**
     * 显示Toast
     * @param msg
     */
    @ReactMethod
    public void showToast(String msg) {
        MyToast.showToast(getCurrentActivity(),msg);
    }
}
