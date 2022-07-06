import Block,{ Data, fields } from './Block'

import Icon from "./Icon";
import React from "react";

export default {
    name: 'hero-type-b',
    fields: fields,
    block: (data: Data) => <Block {...data} />,
    icon: <Icon />
};