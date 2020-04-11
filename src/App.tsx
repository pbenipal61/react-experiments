import React from 'react';
import DropZoneArea from "./DropZoneArea";
import styles from "./styles.module.css";

function App() {
  return (
    <div className = {styles['wrapper']}>
      <DropZoneArea />
    </div>
  );
}

export default App;
