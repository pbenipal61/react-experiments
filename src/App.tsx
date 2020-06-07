import React, {useState} from 'react';
import Cropper from "./Cropper";
import styles from "./styles.module.css";
import ParentHub from "./Hub/ParentHub";
import ChildHub from "./Hub/ChildHub";
import Fingerprint from "./Fingerprint";
import LocalStorageExp from "./LocalStorageExp";
import { storage } from "./utils";
import FirebaseCExps from "./FirebaseCExps";
import * as firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/remote-config'
function App() {

    const [color, setColor] = React.useState<string>();
    const firebaseConfig = {
      apiKey: "AIzaSyCDlAMzgV-zqTxlIkRiaiA2aFswxS1I4gc",
      authDomain: "coresine-experiments.firebaseapp.com",
      databaseURL: "https://coresine-experiments.firebaseio.com",
      projectId: "coresine-experiments",
      storageBucket: "coresine-experiments.appspot.com",
      messagingSenderId: "335448367218",
      appId: "1:335448367218:web:a9e7697b12589c389a62eb",
      measurementId: "G-RJLXKF3YMS"
    }

    try{
      firebase.initializeApp(firebaseConfig);
      
    }
    catch(err){
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error raised', err.stack)
      }
    }

    firebase.analytics()
    
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings = {
      minimumFetchIntervalMillis: 3600000,
      fetchTimeoutMillis: 2000,
    };

    remoteConfig.defaultConfig = ({
      color: '#bf8e45'
    });
    
    ( async () => {
     try{
      await remoteConfig.fetchAndActivate();
      const colorStr = remoteConfig.getString('color');
      console.log(colorStr);
      setColor(colorStr);
     }
     catch(err){
       console.log("error downloading remote config", err.stack);
     }
    })()


  return (
    <div className = {styles['wrapper']}>
        <FirebaseCExps color={color?color:''}/>
    </div>
  );
}

export default App;
