import Block,{ Data, fields } from './Block'

import Icon from "./Icon";
import React from "react";

export default {
    name: 'statistics-type-c',
    fields: fields,
    block: (data: Data) => <Block {...data} />,
    icon: <Icon />
};