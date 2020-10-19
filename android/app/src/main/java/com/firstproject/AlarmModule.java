// ToastModule.java

package com.firstproject;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



import android.app.AlarmManager;
import android.app.PendingIntent;
import android.provider.AlarmClock;
import android.content.Intent;


import java.util.Map;
import java.util.HashMap;

public class AlarmModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";



    @Override
    public String getName() {
        return "AlarmExamples";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }



    @ReactMethod
    public void setAlarm(String message, int duration) {
      Intent i = new Intent(AlarmClock.ACTION_SET_ALARM);
      i.putExtra(AlarmClock.EXTRA_HOUR, 0);
      i.putExtra(AlarmClock.EXTRA_MINUTES, 57);
      i.putExtra(AlarmClock.EXTRA_MESSAGE, "This is my custom message.");
      i.putExtra(AlarmClock.EXTRA_SKIP_UI, false);
      i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      this.reactContext.startActivity(i);
  Toast.makeText(getReactApplicationContext(), "intent set", duration).show();


    }


  AlarmModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
}
