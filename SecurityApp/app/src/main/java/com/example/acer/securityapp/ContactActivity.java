package com.example.acer.securityapp;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.preference.PreferenceManager;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class ContactActivity extends AppCompatActivity {

    private ArrayAdapter<String> arrayAdapter;
    private ListView listView;
    private Context context = this;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact);

        listView = findViewById(R.id.saved_contacts);

        ArrayList<String> arrayList;
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(this);
        try {
            arrayList = new ArrayList<String>(preferences.getStringSet("CONTACTS", null));
        } catch (NullPointerException e) {
            arrayList = new ArrayList<String>();
            arrayList.add("8587802903");
            arrayList.add("9925003704");
            arrayList.add("8674490577");
        }

        arrayAdapter = new ArrayAdapter<String>(this, R.layout.contact_list, R.id.phno, arrayList);
        listView.setAdapter(arrayAdapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String phNo = arrayAdapter.getItem(i);
                Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + phNo));
                if (ActivityCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                    // TODO: Consider calling
                    //    ActivityCompat#requestPermissions
                    // here to request the missing permissions, and then overriding
                    //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
                    //                                          int[] grantResults)
                    // to handle the case where the user grants the permission. See the documentation
                    // for ActivityCompat#requestPermissions for more details.
                    return;
                }
                startActivity(intent);
            }
        });

    }
}
