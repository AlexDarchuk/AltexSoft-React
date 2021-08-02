import React from 'react';
import fetchUsersData from '../../api/articles/articles';

const Body = (props) => {
    fetchUsersData().then(respons => console.log(respons))
    return (
        <h1>Hello</h1>
    )
};

export default Body;