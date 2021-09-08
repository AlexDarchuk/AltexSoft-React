import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import style from './Pagination.module.css';

export const Pagination = ({ articles, setPage}) => {
    const [postsPerPage] = useState(10);
    const pageCount = Math.ceil(articles.length/postsPerPage)


    return (
        <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={setPage}
        containerClassName={style.paginationBtns}
        previousLinkClassName={style.previousBtn}
        nextClassName={style.nextBtn}
        disabledClassName={style.paginationDisable}
        activeClassName={style.paginationActive}
        />
    );
};