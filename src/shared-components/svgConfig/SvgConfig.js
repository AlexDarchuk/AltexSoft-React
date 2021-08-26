import React from 'react';
import style from './SvgConfig.module.css'

export const SvgConfig = {
    'heart': ({size, color, ...props}) => (
        <svg  
            width={size}
            {...props}
            data-prefix="fas" 
            data-icon="heart" 
            className={style.svg}
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path  fill={color} d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
        </path>
        </svg>
    ),
    'user': ({size, color, ...props}) => (
        <svg
            width={size}
            {...props}
            focusable="false" 
            data-prefix="fas" 
            data-icon="user" 
            className={style.user}
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
            <path fill={color} 
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
            </path>
        </svg>
    ),
    'close': ({size, color, ...props}) => (
        <svg 
            width={size}
            {...props}
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="times" 
            className={style.close} 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 352 512">
            <path fill={color} 
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
            </path>
        </svg>
    )
};
