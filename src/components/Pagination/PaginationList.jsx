import React from 'react';
import "./PaginationList.css";
import Pagination from 'react-bootstrap/Pagination';

const PaginationList = ({ paginate, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPosts; i++) {
        pageNumbers.push(i);
    }


    return (
        <div className='paginate'>
            <Pagination >
                {pageNumbers.map(number => (

                    <Pagination.Item key={number} onClick={() => paginate(number)}>{number}</Pagination.Item>
                ))}
            </Pagination>
        </div>

    );
}

export default PaginationList;
