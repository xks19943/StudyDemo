package com.liaoye.studydemo.toast;

import android.content.Context;
import android.view.Gravity;
import android.widget.Toast;

import com.liaoye.studydemo.R;

/**
 * Created by xiaoming on 2017/6/2.
 */
public class MyToast {
    private static Toast toast;

    public static void showToast(Context context, String msg) {
        cleanToast();
        toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
        toast.setGravity(Gravity.CENTER, 0, 0);
        toast.show();
    }

    public static void showErrorMsg(Context context, String msg) {
        ToastView toast = new ToastView(context, msg);
        toast.setGravity(Gravity.CENTER, 0, 0);
        toast.setToastImage(R.drawable.toast_img_error);
        toast.show();
    }

    public static void showSuccessMsg(Context context, String msg) {
        ToastView toast = new ToastView(context, msg);
        toast.setGravity(Gravity.CENTER, 0, 0);
        toast.setToastImage(R.drawable.toast_img_success);
        toast.show();
    }


    private static void cleanToast() {
        if (toast != null)
            toast.cancel();
    }
}
