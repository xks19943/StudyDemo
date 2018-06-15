package com.liaoye.studydemo.datetime;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.liaoye.studydemo.utils.RequestCode;

import static android.app.Activity.RESULT_OK;

/**
 * Created by xiaoming on 2017/6/2.
 */

public class DateTimePickerModule extends ReactContextBaseJavaModule implements ActivityEventListener{
    private Callback mCallback;
    public DateTimePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DateTime";
    }

    /**
     * 日期选择
     * @param mCallback
     */
    @ReactMethod
    public void launchDatePicker(Callback mCallback) {
        Intent intent = new Intent(getCurrentActivity(), DatePickerActivity.class);
        getCurrentActivity().startActivityForResult(intent, RequestCode.DATEPICKE);
        this.mCallback = mCallback;
    }

    /**
     * 时间选择
     * @param mCallback
     */
    @ReactMethod
    public void launchTimePicker(Callback mCallback) {
        Intent intent = new Intent(getCurrentActivity(), TimePickerActivity.class);
        getCurrentActivity().startActivityForResult(intent, RequestCode.TIMEPICKE);
        this.mCallback = mCallback;
    }

    /**
     * 时间日期选择
     * @param mCallback
     */
    @ReactMethod
    public void launchDateTimePicker(Callback mCallback) {
        Intent intent = new Intent(getCurrentActivity(), DateTimePickerActivity.class);
        getCurrentActivity().startActivityForResult(intent, RequestCode.DATETIMEPICKE);
        this.mCallback = mCallback;
    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == RequestCode.DATEPICKE && resultCode == RESULT_OK) {
            if (this.mCallback != null) {
                WritableMap wm = Arguments.createMap();
                wm.putString("date", data.getStringExtra("date"));
                this.mCallback.invoke(wm);
                this.mCallback = null;
            }
        } else if (requestCode == RequestCode.TIMEPICKE && resultCode == RESULT_OK) {
            if (this.mCallback != null) {
                WritableMap wm = Arguments.createMap();
                wm.putString("hour", data.getStringExtra("hour"));
                wm.putString("mins", data.getStringExtra("mins"));
                this.mCallback.invoke(wm);
                this.mCallback = null;
            }
        }else if (requestCode == RequestCode.DATETIMEPICKE && resultCode == RESULT_OK) {
            if (this.mCallback != null) {
                WritableMap wm = Arguments.createMap();
                wm.putString("date", data.getStringExtra("date"));
                wm.putString("hour", data.getStringExtra("hour"));
                wm.putString("mins", data.getStringExtra("mins"));
                this.mCallback.invoke(wm);
                this.mCallback = null;
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
