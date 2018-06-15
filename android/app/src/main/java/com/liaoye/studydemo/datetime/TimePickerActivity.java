package com.liaoye.studydemo.datetime;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;


import com.liaoye.studydemo.R;
import com.liaoye.studydemo.views.picker.OnWheelChangedListener;
import com.liaoye.studydemo.views.picker.WheelView;
import com.liaoye.studydemo.views.picker.adapters.AbstractWheelTextAdapter;
import com.liaoye.studydemo.views.picker.adapters.NumericWheelAdapter;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;


public class TimePickerActivity extends Activity {

    private TextView tv_now;

    private WheelView wv_hour, wv_min;
    // Count of days to be shown
    private final int daysCount = 365 * 100;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.layout_datetime);

        initView();
    }

    public void initView() {
        tv_now = (TextView) findViewById(R.id.tv_now);
        findViewById(R.id.btn_selected).setOnClickListener(topbarlis);
        findViewById(R.id.btn_cancel).setOnClickListener(topbarlis);

        wv_hour = (WheelView) findViewById(R.id.wv_hour);
        NumericWheelAdapter hourAdapter = new NumericWheelAdapter(this, 0, 23);
        hourAdapter.setItemResource(R.layout.wheel_text_item);
        hourAdapter.setItemTextResource(R.id.text);
        wv_hour.setViewAdapter(hourAdapter);
        wv_hour.addChangingListener(new OnWheelChangedListener() {
            @Override
            public void onChanged(WheelView wheel, int oldValue, int newValue) {
                String time = tv_now.getText().toString();
                tv_now.setText(newValue + ":" + time.split(":")[1]);
            }
        });
        LinearLayout.LayoutParams params = (LinearLayout.LayoutParams) wv_hour.getLayoutParams();
        params.width = 0;
        params.weight = 1;
        wv_hour.setLayoutParams(params);

        wv_min = (WheelView) findViewById(R.id.wv_min);
        NumericWheelAdapter minAdapter = new NumericWheelAdapter(this, 0, 59);
        minAdapter.setItemResource(R.layout.wheel_text_item);
        minAdapter.setItemTextResource(R.id.text);
        wv_min.setViewAdapter(minAdapter);
        LinearLayout.LayoutParams params2 = (LinearLayout.LayoutParams) wv_min.getLayoutParams();
        params2.width = 0;
        params2.weight = 1;
        wv_min.setLayoutParams(params2);

        wv_min.addChangingListener(new OnWheelChangedListener() {
            @Override
            public void onChanged(WheelView wheel, int oldValue, int newValue) {
                String time = tv_now.getText().toString();
                tv_now.setText(time.split(":")[0] + ":" + newValue);
            }
        });

        // set current time
        final Calendar calendar = Calendar.getInstance(Locale.CHINA);
        tv_now.setText(calendar.get(Calendar.HOUR_OF_DAY) + ":" + calendar.get(Calendar.MINUTE));
        wv_hour.setCurrentItem(calendar.get(Calendar.HOUR_OF_DAY));
        wv_min.setCurrentItem(calendar.get(Calendar.MINUTE));
//		ampm.setCurrentItem(calendar.get(Calendar.AM_PM));

        final WheelView day = (WheelView) findViewById(R.id.wv_day);
        day.setVisibility(View.GONE);
    }

    private View.OnClickListener topbarlis = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.btn_selected:
                    Intent i = new Intent();
//                    i.putExtra("date", year.getText().toString());
                    i.putExtra("hour", wv_hour.getCurrentItem() + "");
                    i.putExtra("mins", wv_min.getCurrentItem() + "");
                    setResult(RESULT_OK, i);
                    break;
                case R.id.btn_cancel:
                    break;
            }
            finish();
        }
    };

    /**
     * Day adapter
     */
    private class DayArrayAdapter extends AbstractWheelTextAdapter {

        // Calendar
        Calendar calendar;

        /**
         * Constructor
         */
        protected DayArrayAdapter(Context context, Calendar calendar) {
            super(context, R.layout.item_datetime, NO_RESOURCE);
            this.calendar = calendar;
            setItemTextResource(R.id.time2_monthday);
        }

        @Override
        public View getItem(int index, View cachedView, ViewGroup parent) {
            int day = -daysCount / 2 + index;
            Calendar newCalendar = (Calendar) calendar.clone();
            newCalendar.add(Calendar.DAY_OF_YEAR, day);

            View view = super.getItem(index, cachedView, parent);
            TextView weekday = (TextView) view.findViewById(R.id.time2_weekday);
            if (day == 0) {
                weekday.setText("");
            } else {
                DateFormat format = new SimpleDateFormat("EEE");
                weekday.setText(format.format(newCalendar.getTime()));
            }
            weekday.setTextColor(0xff333333);

            TextView monthday = (TextView) view.findViewById(R.id.time2_monthday);
            if (day == 0) {
                monthday.setText("今天");
            } else {
                DateFormat format = new SimpleDateFormat("MM月dd日");
                monthday.setText(format.format(newCalendar.getTime()));
            }
            monthday.setTextColor(0xff333333);

            return view;
        }


        @Override
        public int getItemsCount() {
            return daysCount;
        }

        @Override
        protected CharSequence getItemText(int index) {
            return "";
        }
    }
}
