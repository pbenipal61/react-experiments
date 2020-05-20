import React from 'react';
import { storage } from "./utils";

export default () => {
    return <div>{storage.retrieve("key")}</div>
}