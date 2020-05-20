import React from 'react';
import { getFingerprint } from "./utils";


export default () => {
    return <div>
        <button onClick={async () => {
            const fp = await getFingerprint();
            console.log(fp);
        }
        }>Print fingerprint</button>
    </div>
}