import React from 'react';
import ReactPaginate from 'react-paginate';

import './index.scss';


export const Pagination = (props) => {
    const {pageCount, onChange} = props;

    return <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel='&#10094;'
        nextLabel='&#10095;'
        breakLabel='...'
        onPageChange={({selected}) => onChange(selected + 1)}
        containerClassName='pagination'
        activeClassName='active'
        pageClassName='item'
    />
};