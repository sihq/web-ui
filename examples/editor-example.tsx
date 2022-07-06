import React,{ FunctionComponent } from "react";

import { Input } from "../src";

interface EditorExampleProps {
    
}
 
const EditorExample: FunctionComponent<EditorExampleProps> = () => {
    return (<div className="p-5 w-full absolute top-0 bottom-0 flex">
        <Input type="builder" />
    </div>);
}
 
export default EditorExample;