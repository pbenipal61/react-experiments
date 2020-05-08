import React from 'react';
import { Hub } from "@aws-amplify/core";
import { HubCapsule } from "@aws-amplify/core/lib/Hub";
import ChildHub from "./ChildHub";

const ParentHub = (props: any) => {

    Hub.listen("test channel", (data: HubCapsule) => {
       console.log("parent", data);
    });
    return <div>
        <div>Parent</div>
        <ChildHub />
    </div>
};

export default ParentHub;