package com.liaoye.studydemo.dialog;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.liaoye.studydemo.R;

public class DialogView {

    public Dialog mDialog;
    public TextView dialog_title;
    private TextView dialog_message;
    public TextView positive;
    public TextView negative;
    public LinearLayout dialog_view;
    private View titleView;


    public DialogView(Context context, String message) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.layout_dialog, null);
        mDialog = new Dialog(context, R.style.dialog);
        mDialog.setContentView(view);
        mDialog.setCanceledOnTouchOutside(true);
        mDialog.setOnKeyListener(new DialogInterface.OnKeyListener() {
            @Override
            public boolean onKey(DialogInterface dialog, int keyCode,
                                 KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_BACK) {
                    return false;
                }
                return false;
            }
        });
        dialog_title = (TextView) view.findViewById(R.id.dialog_title);
        dialog_message = (TextView) view.findViewById(R.id.dialog_message);
        dialog_view = (LinearLayout) view.findViewById(R.id.dialog_view);
        dialog_message.setText(message);

        positive = (TextView) view.findViewById(R.id.yes);
        negative = (TextView) view.findViewById(R.id.no);

    }

    /*
        标题详情两个按钮
     */
    public DialogView(Context context, String title, String message) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.layout_dialog, null);
        mDialog = new Dialog(context, R.style.dialog);
        mDialog.setContentView(view);
        mDialog.setCanceledOnTouchOutside(true);
        mDialog.setOnKeyListener(new DialogInterface.OnKeyListener() {
            @Override
            public boolean onKey(DialogInterface dialog, int keyCode,
                                 KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_BACK) {
                    return false;
                }
                return false;
            }
        });
        dialog_title = (TextView) view.findViewById(R.id.dialog_title);
        dialog_message = (TextView) view.findViewById(R.id.dialog_message);
        dialog_view = (LinearLayout) view.findViewById(R.id.dialog_view);

        dialog_title.setVisibility(View.VISIBLE);

        dialog_title.setText(title);
        dialog_message.setText(message);

        positive = (TextView) view.findViewById(R.id.yes);
        negative = (TextView) view.findViewById(R.id.no);

    }


    /*
        详情无按钮
     */
    public DialogView(Context context, String message, boolean noBtn) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.layout_dialog, null);

        mDialog = new Dialog(context, R.style.dialog);
        mDialog.setContentView(view);
        mDialog.setCanceledOnTouchOutside(false);
        mDialog.setOnKeyListener(new DialogInterface.OnKeyListener() {
            @Override
            public boolean onKey(DialogInterface dialog, int keyCode,
                                 KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_BACK) {
                    return false;
                }
                return false;
            }
        });

        dialog_title = (TextView) view.findViewById(R.id.dialog_title);
        dialog_message = (TextView) view.findViewById(R.id.dialog_message);
        dialog_view = (LinearLayout) view.findViewById(R.id.dialog_view);
        dialog_message.setText(message);

        positive = (TextView) view.findViewById(R.id.yes);
        negative = (TextView) view.findViewById(R.id.no);
        dialog_title.setText("");
        negative.setVisibility(View.INVISIBLE);
        positive.setText("我知道了");
        positive.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                mDialog.dismiss();
            }
        });


    }

    public DialogView(Context context, String title, String message, boolean noBtn) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.layout_dialog, null);

        mDialog = new Dialog(context, R.style.dialog);
        mDialog.setContentView(view);
        mDialog.setCanceledOnTouchOutside(false);
        mDialog.setOnKeyListener(new DialogInterface.OnKeyListener() {
            @Override
            public boolean onKey(DialogInterface dialog, int keyCode,
                                 KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_BACK) {
                    return false;
                }
                return false;
            }
        });
        TextView tv = (TextView) view.findViewById(R.id.dialog_title);
        tv.setVisibility(View.VISIBLE);
        tv.setText(title);

        dialog_message = (TextView) view.findViewById(R.id.dialog_message);
        LinearLayout.LayoutParams pa = (LinearLayout.LayoutParams) dialog_message.getLayoutParams();
        pa.topMargin = dip2px(context, 12);
        dialog_message.setLayoutParams(pa);
        dialog_view = (LinearLayout) view.findViewById(R.id.dialog_view);
        dialog_message.setText(message);

        positive = (TextView) view.findViewById(R.id.yes);
        negative = (TextView) view.findViewById(R.id.no);
        dialog_title.setText("");
        negative.setVisibility(View.INVISIBLE);
        positive.setText("我知道了");
        positive.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                mDialog.dismiss();
            }
        });

    }


    public void setCanceledOnTouchOutside(boolean isOnTouch) {
        mDialog.setCanceledOnTouchOutside(isOnTouch);
    }

    public void setCancel(boolean isCancel) {
        mDialog.setCancelable(isCancel);
    }

    public void setView(View view) {
        dialog_message.setVisibility(View.GONE);
        dialog_view.addView(view);
    }


    public void show() {
        mDialog.show();
    }

    public void GoneCanCle() {
        negative.setVisibility(View.GONE);
    }

    public void GoneMasure() {
        positive.setVisibility(View.GONE);
    }

    public void dismiss() {
        mDialog.dismiss();
    }


    public void setPositiveButton(String masure, OnClickListener verUpOk) {
        positive.setText(masure);
        positive.setOnClickListener(verUpOk);
    }

    public void setNegativeButton(String cancle, OnClickListener verUpOk) {
        negative.setText(cancle);
        negative.setOnClickListener(verUpOk);
    }

    /**
     * 根据手机的分辨率从 dp 的单位 转成为 px(像素)
     */
    public int dip2px(Context context, float dpValue) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

}
