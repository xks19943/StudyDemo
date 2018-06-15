package com.liaoye.studydemo.loading;

import android.app.Dialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

import com.liaoye.studydemo.R;


public class MyProgressDialog {

    public Dialog mDialog;
    //    private AnimationDrawable animationDrawable = null;
    private Animation animation = null;

    public MyProgressDialog(Context context, String message) {

        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.progress_view, null);

        TextView text = (TextView) view.findViewById(R.id.progress_message);
        text.setText(message);
        text.setVisibility(View.VISIBLE);
        ImageView loadingImage = (ImageView) view.findViewById(R.id.progress_view);
        animation = AnimationUtils.loadAnimation(context, R.anim.loading_animation);
//        loadingImage.setImageResource(R.drawable.loading_animation);
//        animationDrawable = (AnimationDrawable) loadingImage.getDrawable();
//        if (animationDrawable != null) {
//            animationDrawable.setOneShot(false);
//            animationDrawable.start();
//        }
        loadingImage.setAnimation(animation);
        animation.start();

        mDialog = new Dialog(context, R.style.dialog);
        mDialog.setContentView(view);
        mDialog.setCanceledOnTouchOutside(false);

    }

    public void show() {
        mDialog.show();
    }

    public void setCanceledOnTouchOutside(boolean cancel) {
        mDialog.setCanceledOnTouchOutside(cancel);
    }

    public void dismiss() {
        if (mDialog.isShowing()) {
            mDialog.dismiss();
//            animationDrawable.stop();
            animation.cancel();
        }
    }

    public boolean isShowing() {
        if (mDialog.isShowing()) {
            return true;
        }
        return false;
    }
}
