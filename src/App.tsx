import React from 'react';
import Cropper from "./Cropper";
import styles from "./styles.module.css";
import Auth from "./Auth";

function App() {
  return (
    <div className = {styles['wrapper']}>
      <Auth />
    </div>
  );
}

export default App;
