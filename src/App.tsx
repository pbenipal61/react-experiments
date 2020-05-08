import React from 'react';
import Cropper from "./Cropper";
import styles from "./styles.module.css";
import ParentHub from "./Hub/ParentHub";

function App() {
  return (
    <div className = {styles['wrapper']}>
      <ParentHub />
    </div>
  );
}

export default App;
