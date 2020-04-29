import React, {ChangeEvent, useEffect} from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import styles from "./styles.module.css";

const CropperComponent = (props: any) => {
    const [imgDestination, setImgDestination] = React.useState<string>();
    const [src, setSrc] = React.useState<string>("https://images-na.ssl-images-amazon.com/images/I/81GyqsC7hSL.jpg");
    const imgRef = React.createRef<HTMLImageElement>();
    useEffect(() => {
        const cropper = new Cropper(imgRef.current as HTMLImageElement, {
            zoomable: true,
            scalable: true,
            aspectRatio: 1,
            crop: () => {
                const canvas = cropper.getCroppedCanvas();
                setImgDestination(canvas.toDataURL("image/png"));
            }
        });

    }, []);
    return <div>

        <div className={styles['img-container']}>
            <img ref={imgRef} src={src} alt={"Original"}/>
        </div>

        <img className={styles['img-preview']} src={imgDestination} alt={"Custom"}/>
    </div>
};

export default CropperComponent;