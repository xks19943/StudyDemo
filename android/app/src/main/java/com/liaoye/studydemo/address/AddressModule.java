package com.liaoye.studydemo.address;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by xiaoming on 2017/6/2.
 */

public class AddressModule extends ReactContextBaseJavaModule {
    public AddressModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Address";
    }
}
