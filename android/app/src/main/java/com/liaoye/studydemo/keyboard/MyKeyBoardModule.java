package com.liaoye.studydemo.keyboard;

import android.app.AlertDialog;
import android.app.Dialog;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Leung on 2016/10/13.
 */
public class MyKeyBoardModule extends ReactContextBaseJavaModule {
    /**
     * android 弹不出键盘时调用
     *
     */
    public MyKeyBoardModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyKeyBoard";
    }

    @ReactMethod
    public void restore() {
        Dialog d = new AlertDialog.Builder(getCurrentActivity()).create();
        synchronized (d) {
            d.show();
        }
        d.cancel();
    }

}
