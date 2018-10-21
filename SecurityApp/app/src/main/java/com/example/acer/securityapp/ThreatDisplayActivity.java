package com.example.acer.securityapp;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.preference.PreferenceManager;
import android.provider.ContactsContract;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashSet;

public class ThreatDisplayActivity extends AppCompatActivity {

    private LocationManager locationManager;

    private TextView coordText;
    private TextView threatIndTxt;
    private TextView alertText;
    private JsonStringData jsonStringData = new JsonStringData();
    private int threatIndex;
    private EditText userScore;
    private Button submitButton;
    private LinearLayout linearLayout;
    private Context context = this;
    private Double latit,longi;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_threat_display);

        coordText = findViewById(R.id.coords);
        threatIndTxt = findViewById(R.id.threat_index);
        alertText = findViewById(R.id.alert);
        userScore = findViewById(R.id.edit_text);
        submitButton = findViewById(R.id.submit);
        linearLayout = findViewById(R.id.form);

        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return;
        }
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, getLocationListener());
        locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER,0,0,getLocationListener());

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(userScore.getText()==null||userScore.getText().toString().compareTo("")==0){
                    Toast.makeText(context,"Enter your score",Toast.LENGTH_SHORT).show();
                    return;
                }
                SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(context);
                ArrayList<String> arrayList;
                try{
                    arrayList = new ArrayList<>(sharedPreferences.getStringSet("DATA",null));
                }catch (NullPointerException e){
                    arrayList=new ArrayList<String>();
                }
                arrayList.add(latit + " "+ longi+ " "+userScore.getText());
                SharedPreferences.Editor editor = sharedPreferences.edit();

                editor.putStringSet("DATA",new HashSet<String>(arrayList));
                editor.apply();
                linearLayout.setVisibility(View.INVISIBLE);
                Toast.makeText(context,"Score submited",Toast.LENGTH_SHORT).show();
            }
        });
    }

    public LocationListener getLocationListener(){
        return new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                coordText.setText(location.getLatitude()+" "+location.getLongitude());
                latit = location.getLatitude();
                longi = location.getLongitude();
                int dangerLvl = -1;

                try {
                    dangerLvl = jsonStringData.checkThreatLevelDanger(jsonStringData.getJsonObject(),location);
                } catch (JSONException e) {
                    Log.e("error","jason error 2");
                    e.printStackTrace();
                }
                if(threatIndex!=dangerLvl){
                    threatIndex = dangerLvl;
                    threatIndTxt.setText("THREAT LEVEL "+threatIndex);
                    if(threatIndex>=3){
                        alertText.setText("Try to avoid this place!");
                    }else{
                        alertText.setText("");
                    }
                }

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

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.add_score, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if(id==R.id.action_add_score) {
            linearLayout.setVisibility(View.VISIBLE);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
