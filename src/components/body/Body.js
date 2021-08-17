import React from 'react';
import {Title} from '../Layout';
import { Main } from '../../pages';
import style from './Body.module.css';

export const Body = () => {
    return (
        <main className={style.body}>
            <Title/>
            <Main/>
        </main>
    );
};