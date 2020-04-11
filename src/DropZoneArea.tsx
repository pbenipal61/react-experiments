import React, { useCallback } from 'react';
import styles from "./styles.module.css";
import DropZone, { useDropzone } from 'react-dropzone';


// Without Hooks
// const DropZoneArea = (props: any) => {
//  return <div className={styles['drop-zone']}>
//
//   <DropZone onDrop={((acceptedFiles, rejectedFiles, event) => {
//     console.log(acceptedFiles);
//   })}>
//    {
//     ({ getRootProps, getInputProps}: { getRootProps: any, getInputProps: any}) => {
//      return (
//          <section>
//            <div { ...getRootProps() }>
//             <input { ...getInputProps() }/>
//                 <p>Drop Zone</p>
//            </div>
//          </section>
//      );
//     }
//    }
//   </DropZone>
//
//
//  </div>
// };


const DropZoneArea = (props: any) => {

 const onDrop = useCallback((acceptedFiles: any) => {
  console.log(acceptedFiles)
 }, []);

 const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
 return <div className={styles['drop-zone']}>
    <div {...getRootProps()} className={styles['fill-parent']}>
     <input {...getInputProps()} className={styles['fill-parent']}/>
     {
      isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
     }
    </div>
 </div>
};

export default DropZoneArea;
