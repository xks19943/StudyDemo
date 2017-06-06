package com.liaoye.studydemo.dialog;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

/**
 * Created by xiaoming on 2017/6/2.
 */

public class MyDialogModule extends ReactContextBaseJavaModule{
    public MyDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyDialog";
    }

    /**
     * 单标题单按钮对话框
     * @param map
     * @param callback
     */
    @ReactMethod
    public void showMyDialogOnlyTitle(ReadableMap map, final Callback callback) {
        MyDialog.showMyDialogOnlyTitle(getCurrentActivity(), map.getString("title"), new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invoke("");
            }
        }, map.getBoolean("isCancel"));
    }


    /**
     * 双标题单按钮对话框
     * @param map
     * @param callback
     */
    @ReactMethod
    public void showMyDialogDoubleTitle(ReadableMap map, final Callback callback) {
        MyDialog.showMyDialogDoubleTitle(getCurrentActivity(), map.getString("title"), map.getString("desc"), new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invoke("");
            }
        },map.getBoolean("isCancel"));
    }

    /**
     * 单标题双按钮对话框
     * @param map
     * @param callback
     */
    @ReactMethod
    public void showMyDialogWithTwoBtn(ReadableMap map, final Callback callback) {
        MyDialog.showMyDialogWithTwoBtn(getCurrentActivity(), map.getString("title"), map.getString("right"), new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                MyDialog.cancleDialog();
                WritableMap wm = Arguments.createMap();
                wm.putBoolean("rightBtn", true);
                callback.invoke(wm);
            }
        }, map.getString("left"), new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                MyDialog.cancleDialog();
                WritableMap wm = Arguments.createMap();
                wm.putBoolean("leftBtn", true);
                callback.invoke(wm);
            }
        }, map.getBoolean("isCancel"));
    }

    /**
     * 双标题双按钮对话框
     * @param map
     * @param callback
     */
    @ReactMethod
    public void showMyDialogWithDoubleTitleDoubleBtn(ReadableMap map, final Callback callback) {
        MyDialog.showMyDialogWithDoubleTitleDoubleBtn(getCurrentActivity(), map.getString("title"), map.getString("desc"), map.getString("right"),
                new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        MyDialog.cancleDialog();
                        WritableMap wm = Arguments.createMap();
                        wm.putBoolean("rightBtn", true);
                        callback.invoke(wm);
                    }
        }, map.getString("left"),
                new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        MyDialog.cancleDialog();
                        WritableMap wm = Arguments.createMap();
                        wm.putBoolean("leftBtn", true);
                        callback.invoke(wm);
                    }
        }, map.getBoolean("isCancel"));
    }
}
