package com.liaoye.studydemo.datetime;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
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


public class DatePickerActivity extends Activity {

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
        wv_hour.setVisibility(View.GONE);

        wv_min = (WheelView) findViewById(R.id.wv_min);
        wv_min.setVisibility(View.GONE);


        // set current time
        final Calendar calendar = Calendar.getInstance(Locale.CHINA);
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        tv_now.setText(format.format(calendar.getTime()));


        final WheelView day = (WheelView) findViewById(R.id.wv_day);
        final DayArrayAdapter dayArrayAdapter = new DayArrayAdapter(this, calendar);
        day.setViewAdapter(dayArrayAdapter);
        day.setCurrentItem(daysCount / 2);
        day.addChangingListener(new OnWheelChangedListener() {
            @Override
            public void onChanged(WheelView wheel, int oldValue, int newValue) {
                int day = -daysCount / 2 + newValue;
                Calendar ca = (Calendar) calendar.clone();
                ca.add(Calendar.DAY_OF_YEAR, day);
                DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                tv_now.setText(format.format(ca.getTime()));
            }
        });
    }

    private View.OnClickListener topbarlis = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.btn_selected:
                    Intent i = new Intent();
                    i.putExtra("date", tv_now.getText().toString());
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
