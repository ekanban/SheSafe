package com.example.acer.securityapp;

import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.IBinder;
import android.preference.PreferenceManager;
import android.support.v7.app.NotificationCompat;
import android.telephony.SmsManager;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


public class LocationListnerService extends Service
{

    private Context context = this;
    private static final String TAG = "BOOMBOOMTESTGPS";
    private LocationManager mLocationManager = null;
    private SmsManager mMessageManager;
    private int TIME_INTERVAL=2000;
    private boolean hasSendLocation = false;
    private JsonStringData jsonStringData = new JsonStringData();


    private JSONObject jsonObject;


    private class LocationListener implements android.location.LocationListener
    {
        Location mLastLocation;

        public LocationListener(String provider)
        {
            Log.d(TAG, "LocationListener " + provider);
            mLastLocation = new Location(provider);
        }

        @Override
        public void onLocationChanged(Location location)
        {
            Log.d(TAG, "onLocationChanged: " + location);
            mLastLocation.set(location);
            int dangerLvl = -1;

            try {
                dangerLvl = jsonStringData.checkThreatLevelDanger(jsonStringData.getJsonObject(),location);
            } catch (JSONException e) {
                Log.e(TAG,"jason error 2");
                e.printStackTrace();
            }

            Intent notificationIntent = new Intent(context, MainActivity.class);

            PendingIntent pendingIntent = PendingIntent.getActivity(context, 0,
                    notificationIntent, 0);

            Notification notification = new NotificationCompat.Builder(context)
                    .setSmallIcon(R.mipmap.ic_launcher)
                    .setContentTitle("Protecting...")
                    .setContentText("Threat Level: " + dangerLvl)
                    .setContentIntent(pendingIntent).build();

            startForeground(1337, notification);
            if(!hasSendLocation){
                SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
                ArrayList<String> arrayList;
                try{
                    arrayList = new ArrayList<>(sharedPreferences.getStringSet("CONTACTS",null));
                }catch (NullPointerException e){
                    arrayList=null;
                }

                if(arrayList==null){
                    return;
                }
                Geocoder gcd = new Geocoder(context, Locale.getDefault());
                List<Address> address = null;
                try {
                    address = gcd.getFromLocation(location.getLatitude(),location.getLongitude(),1);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                for (int i = 0; i < arrayList.size(); i++) {
                    mMessageManager.sendTextMessage(arrayList.get(i), null, "I am sending my location for precaution for my safety. Latitude: "+" "+"http://google.com/maps/bylatlng?lat=" + location.getLatitude() + "&lng=" + location.getLongitude()+"   ,address - "+address.get(0).getLocality()+","+address.get(0).getSubLocality(), null, null);
                }
                hasSendLocation = true;
            }
        }

        @Override
        public void onProviderDisabled(String provider)
        {
            Log.d(TAG, "onProviderDisabled: " + provider);
        }

        @Override
        public void onProviderEnabled(String provider)
        {
            Log.d(TAG, "onProviderEnabled: " + provider);
        }

        @Override
        public void onStatusChanged(String provider, int status, Bundle extras)
        {
            Log.d(TAG, "onStatusChanged: " + provider);
        }
    }

    LocationListener[] locationListeners = {new LocationListener(LocationManager.GPS_PROVIDER),new LocationListener(LocationManager.NETWORK_PROVIDER)};

    @Override
    public IBinder onBind(Intent arg0)
    {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId)
    {
        Log.d(TAG, "onStartCommand");
        super.onStartCommand(intent, flags, startId);
        return START_STICKY;
    }

    @Override
    public void onCreate()
    {

        mMessageManager = SmsManager.getDefault();

        try {
            jsonObject = new JSONObject(JsonStringData.jsonString);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        Log.d(TAG,"-----SERVICE STARTED------");
        Intent notificationIntent = new Intent(this, MainActivity.class);

        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0,
                notificationIntent, 0);

        Notification notification = new NotificationCompat.Builder(this)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("Protecting...")
                .setContentText("Getting Loc")
                .setContentIntent(pendingIntent).build();

        startForeground(1337, notification);
        initializeLocationManager();

        try {
            mLocationManager.requestLocationUpdates(
                    LocationManager.NETWORK_PROVIDER, 2000, 0,
                    locationListeners[1]);
        } catch (java.lang.SecurityException ex) {
            Log.i(TAG, "fail to request location update, ignore", ex);
        } catch (IllegalArgumentException ex) {
            Log.d(TAG, "network provider does not exist, " + ex.getMessage());
        }

        try {
            mLocationManager.requestLocationUpdates(
                    LocationManager.GPS_PROVIDER, 2000, 0,
                    locationListeners[0]);
        } catch (java.lang.SecurityException ex) {
            Log.i(TAG, "fail to request location update, ignore", ex);
        } catch (IllegalArgumentException ex) {
            Log.d(TAG, "network provider does not exist, " + ex.getMessage());
        }
    }

    @Override
    public void onDestroy()
    {
        Log.e(TAG, "onDestroy");
        super.onDestroy();
        if (mLocationManager != null) {
            mLocationManager.removeUpdates(locationListeners[0]);
            mLocationManager.removeUpdates(locationListeners[1]);
        }
    }

    private void initializeLocationManager() {
        Log.e(TAG, "initializeLocationManager");
        if (mLocationManager == null) {
            mLocationManager = (LocationManager) getApplicationContext().getSystemService(Context.LOCATION_SERVICE);
        }
    }
}
