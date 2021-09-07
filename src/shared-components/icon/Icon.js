import React from 'react';
import { SvgConfig } from '../';

export const Icon = ({name, ...props}) => {
    const IconC = SvgConfig[name];
    return (
        <IconC {...props} />
    )
};