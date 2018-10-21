package com.example.acer.securityapp;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

public class ThreatDisplayActivity extends AppCompatActivity {

    private LocationManager locationManager;

    private TextView coordText;
    private TextView threatIndTxt;
    private TextView alertText;
    private JsonStringData jsonStringData = new JsonStringData();
    private int threatIndex;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_threat_display);

        coordText = findViewById(R.id.coords);
        threatIndTxt = findViewById(R.id.threat_index);
        alertText = findViewById(R.id.alert);

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
    }

    public LocationListener getLocationListener(){
        return new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                coordText.setText(location.getLatitude()+" "+location.getLongitude());

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
}
