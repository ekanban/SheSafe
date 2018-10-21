package com.example.acer.securityapp;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.net.Uri;
import android.nfc.Tag;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.provider.ContactsContract;
import android.support.annotation.NonNull;
import android.support.annotation.RequiresApi;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.telephony.SmsManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;

import org.json.JSONException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

public class MainActivity extends AppCompatActivity {

    private TextView textView;
    private Button startButton;
    private ImageButton locationButton;
    private ImageButton contactButton;
    private ImageButton sosButton;
    private Context context = this;
    private int buttonMode = 0;
    private double mlat ,mLong;
    private SmsManager mMessageManager;
    private LocationManager mLocationManager = null;


    private Intent intent = null;

    private static final int PICK_CONTACT = 1;

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.location);
        startButton = findViewById(R.id.start);
        locationButton = findViewById(R.id.safety_index);
        contactButton = findViewById(R.id.emergency);
        sosButton = findViewById(R.id.sos);
        mMessageManager = SmsManager.getDefault();
        mLocationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);




        if(savedInstanceState!=null){
            buttonMode = savedInstanceState.getInt("BUTTON_MODE");
            if(buttonMode==1){
                intent = new Intent(context, LocationListnerService.class);
                startButton.setText("Stop");
                //startButton.setPadding(85,100,85,100);
            }
        }

        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(context, Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED || ActivityCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.SEND_SMS, Manifest.permission.READ_PHONE_STATE,Manifest.permission.ACCESS_COARSE_LOCATION,Manifest.permission.ACCESS_FINE_LOCATION,Manifest.permission.READ_CONTACTS,Manifest.permission.CALL_PHONE}, 101);
        }

        mLocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, getLocationListener());

        startButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Button button = (Button) view;
                if(intent==null) {
                    intent = new Intent(context, LocationListnerService.class);
                    startService(intent);
                    button.setText("Stop");
                    buttonMode = 1;
                    //button.setPadding(270,300,270,300);
                }else{
                    stopService(intent);
                    intent=null;
                    button.setText("Start");
                    buttonMode = 0;
                    //button.setPadding(80,100,80,100);
                }
            }
        });

        locationButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context,ThreatDisplayActivity.class);
                startActivity(intent);
            }
        });

        contactButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context,ContactActivity.class);
                startActivity(intent);
            }
        });

        sosButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
                ArrayList<String> arrayList;
                try{
                    arrayList = new ArrayList<>(sharedPreferences.getStringSet("CONTACTS",null));
                }catch (NullPointerException e){
                    arrayList=null;
                }

                if(arrayList==null){
                    Log.e("contact","null contact");
                    return;
                }
                Geocoder gcd = new Geocoder(context, Locale.getDefault());
                List<Address> address = null;
                try {
                    address = gcd.getFromLocation(mlat,mLong,1);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                for (int i = 0; i < arrayList.size(); i++) {
                    mMessageManager.sendTextMessage(arrayList.get(i), null, "I am sending my location for precaution for my safety. "+"http://google.com/maps/bylatlng?lat=" + mlat + "&lng=" + mLong+" ,address - "+address.get(0).getLocality()+","+address.get(0).getSubLocality(), null, null); //"http://google.com/maps/bylatlng?lat=" + location.getLatitude() + "&lng=" + location.getLongitude()+",address - "+address.get(0).getLocality()+","+address.get(0).getSubLocality()
                }
            }
        });



        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION,Manifest.permission.ACCESS_COARSE_LOCATION,Manifest.permission.INTERNET},10);
            return;
        }

    }



    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.action_settings) {
            return true;
        }
        else if(id==R.id.action_add_contact) {
            Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
            startActivityForResult(intent, PICK_CONTACT);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onSaveInstanceState(Bundle savedInstanceState) {
        super.onSaveInstanceState(savedInstanceState);
        savedInstanceState.putInt("BUTTON_MODE",buttonMode);
    }

    @Override public void onActivityResult(int reqCode, int resultCode, Intent data) {
        super.onActivityResult(reqCode, resultCode, data);

        switch (reqCode) {
            case PICK_CONTACT:
                if (resultCode == Activity.RESULT_OK) {
                    Uri contactData = data.getData();
                    Cursor c = managedQuery(contactData, null, null, null, null);
                    if (c.moveToFirst()) {
                        String id = c.getString(c.getColumnIndexOrThrow(ContactsContract.Contacts._ID));

                        String hasPhone =
                                c.getString(c.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER));

                        if (hasPhone.equalsIgnoreCase("1")) {
                            Cursor phones = getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null,
                                    ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = " + id, null, null);
                            phones.moveToFirst();
                            String cNumber = phones.getString(phones.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                            SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(this);
                            Set<String> set = sharedPref.getStringSet("CONTACTS",null);
                            ArrayList<String> arrayList;
                            if(set==null){
                                arrayList = new ArrayList<String>();
                            }else{
                                arrayList = new ArrayList<String>(set);
                            }
                            arrayList.add(cNumber);
                            for (int i = 0; i < arrayList.size(); i++) {
                                Log.d("TEST",arrayList.get(i));
                            }
                            SharedPreferences.Editor editor = sharedPref.edit();

                            editor.putStringSet("CONTACTS",new HashSet<String>(arrayList));
                            editor.apply();
                        }
                    }
                }
        }
    }

    public LocationListener getLocationListener(){
        return new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                mlat= location.getLatitude();
                mLong=location.getLongitude();
                Log.e("lovation","location changed");
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {

            }

            @Override
            public void onProviderEnabled(String s) {

            }

            @Override
            public void onProviderDisabled(String s) {

            }
        };
    }
}
