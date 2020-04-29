import React, { useState } from 'react';

const TestComponent = () => {

    const [src, setSrc] = useState<string>("");
    const fileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const files = event.target.files;
        if(files && files[0]){

            const fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);
            fileReader.onload = (fevent: any) => {
                setSrc(fevent.target.result);
            }
        }
    }
    return <div>
        <input type="file" onSelect={fileSelect} onChange={fileSelect}/>
        <img src={src} style={{
            width: '100px',
            height: '100px'
        }}/>
    </div>
}

export default TestComponent;