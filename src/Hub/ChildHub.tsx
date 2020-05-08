import React from 'react';
import { Hub } from "@aws-amplify/core";

const ChildHub = (props: any) => {

    const dispatch = () => {
        Hub.dispatch("test channel", {
            event: "test event",
            data: {
                a: 1
            },
            message: "Clicked"
        });
    };
    return <div>
        <div>Child hub</div>
        <button onClick={dispatch}> Dispatch </button>
    </div>
};

export default ChildHub;