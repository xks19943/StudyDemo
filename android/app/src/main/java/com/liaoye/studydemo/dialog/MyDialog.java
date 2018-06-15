package com.liaoye.studydemo.dialog;

import android.app.Activity;
import android.content.Context;
import android.view.View;

import static com.baidu.location.h.j.ad;

/**
 * Created by xiaoming on 2017/6/2.
 */

public class MyDialog {

    private static DialogView dialogView;


    /**
     * 单标题的单按钮对话框
     * @param mContext
     * @param title
     * @param onClickListener
     * @param isCancel
     */
    public static void showMyDialogOnlyTitle(Context mContext, String title, View.OnClickListener onClickListener, boolean isCancel){
        dialogView = new DialogView(mContext, title, false);
        if (dialogView.dialog_title != null){
            dialogView.dialog_title.setVisibility(View.GONE);
        }
        dialogView.setCancel(isCancel);
        dialogView.setPositiveButton("我知道了", onClickListener);
        dialogView.show();
   }

    /**
     * 双标题的单按钮对话框
     * @param mContext
     * @param title
     * @param msg
     * @param onClickListener
     * @param isCancel
     */
    public static void showMyDialogDoubleTitle(Context mContext, String title, String msg, View.OnClickListener onClickListener, boolean isCancel) {
        dialogView = new DialogView(mContext, title, msg, false);
        dialogView.setCancel(isCancel);
        dialogView.setPositiveButton("我知道了", onClickListener);
        dialogView.show();
    }

    /**
     * 只有一个标题的警告框
     * @param mContext
     * @param msg
     * @param masure
     * @param clicklistener
     * @param cancel
     * @param cancellistener
     * @param isCancel
     */
    public static void showMyDialogWithTwoBtn(Context mContext, String msg, String masure,
                                              View.OnClickListener clicklistener, String cancel, View.OnClickListener cancellistener, boolean isCancel) {
        dialogView = new DialogView(mContext, msg);
        dialogView.dialog_title.setVisibility(View.GONE);
        dialogView.setCancel(isCancel);
        dialogView.setPositiveButton(masure, clicklistener);
        dialogView.setNegativeButton(cancel, cancellistener);
        dialogView.show();
    }

    /**
     * 两个标题的警告框
     * @param mContext
     * @param title
     * @param msg
     * @param masure
     * @param clicklistener
     * @param cancel
     * @param cancellistener
     * @param isCancel
     */
    public static void showMyDialogWithDoubleTitleDoubleBtn(Context mContext, String title, String msg, String masure,
                                                            View.OnClickListener clicklistener, String cancel, View.OnClickListener cancellistener, boolean isCancel) {
        dialogView = new DialogView(mContext, title, msg);
        dialogView.setCancel(isCancel);
        dialogView.setPositiveButton(masure, clicklistener);
        dialogView.setNegativeButton(cancel, cancellistener);
        dialogView.show();
    }

    public static void cancleDialog() {
        if (dialogView != null) {
            dialogView.dismiss();
        }
    }
}
