import React, {useState} from 'react';
import Cropper from "./Cropper";
import styles from "./styles.module.css";
import ParentHub from "./Hub/ParentHub";
import ChildHub from "./Hub/ChildHub";
import Fingerprint from "./Fingerprint";
import LocalStorageExp from "./LocalStorageExp";
import { storage } from "./utils";

function App() {
    const [cmp, setCmp] = React.useState<any>();
    const language = window.navigator.language;
    window.navigator.geolocation.getCurrentPosition((position: any) => {
       console.log(position);
    });
    console.log(language)

  return (
    <div className = {styles['wrapper']}>
        <button onClick={() => {
            storage.save("key", "some dope ass data");
            setCmp(<Fingerprint />);
        }}>Local storage exps</button>
        {cmp}
    </div>
  );
}

export default App;
