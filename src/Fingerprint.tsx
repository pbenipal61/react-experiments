import React from 'react';
import { getFingerprint } from "./utils";
import MobileDetect from "mobile-detect";
import { deviceDetect } from 'react-device-detect';
import localIpUrl from 'local-ip-url';
import axios from 'axios';


export default () => {
    return <div>
        <button onClick={async () => {
            const fp = await getFingerprint();
            const neededKeys = [
                "userAgent",
                "language",
                "deviceMemory",
                "timezone",
                "platform",
                "adBlock",
            ];

            // @ts-ignore
            let obj = fp.filter((a: any) =>{
                if(neededKeys.includes(a.key)){
                    return true;
                }
                return false;
            }).reduce((acc: any, key: any) => {
                let a = acc;
                a[key.key] = key.value;
                return a;
            },{});

            let deviceData = deviceDetect();
            if(deviceData.isBrowser){
                deviceData['isMobile'] = !deviceData.isBrowser;
            }

            const data = await axios(`http://ip-api.com/json/${localIpUrl()}`);
            let body = data.data;
            if(body.status === "success"){
                const publicIp = body.query;
                deviceData['publicIp'] = publicIp;
                delete body.query;
                delete body.status;
                deviceData = {
                    ...deviceData,
                    ...body
                }
            }

            console.log({
                ...obj,
                ...deviceData,

            });

        }
        }>Print fingerprint</button>
    </div>
}