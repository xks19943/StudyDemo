package com.liaoye.studydemo.loading;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by xiaoming on 2017/6/2.
 */
public class MyProgressDialogModule extends ReactContextBaseJavaModule {

    private MyProgressDialog progressDialog;

    public MyProgressDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyProgressDialog";
    }

    /**
     * 显示加载框
     * @param msg
     */
    @ReactMethod
    public void showMyProgressDialog(String msg) {
        progressDialog = new MyProgressDialog(getCurrentActivity(), msg);
        progressDialog.setCanceledOnTouchOutside(true);
        progressDialog.show();
    }


    /**
     * 隐藏加载框
     */
    @ReactMethod
    public void cancel() {
        if (progressDialog != null) {
            progressDialog.dismiss();
        }

    }
}
