import React from 'react';
import "./Pagination.css";

const Pagination = ({ postsPerPage, paginate, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPosts; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Pagination;