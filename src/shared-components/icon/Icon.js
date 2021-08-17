import React from 'react';
import {SvgConfig} from '../svgConfig';

export const Icon = ({name, ...props}) => {
    const IconC = SvgConfig[name];
    return (
        <IconC {...props} />
    )
};