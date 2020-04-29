import React from 'react';
import Cropper from "./Cropper";
import styles from "./styles.module.css";

function App() {
  return (
    <div className = {styles['wrapper']}>
      <Cropper />
    </div>
  );
}

export default App;
