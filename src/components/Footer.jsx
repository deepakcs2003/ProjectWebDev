import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Footer = () => {
    const { changePage, page, totalPages } = useContext(AppContext);

    return (
        <div className="fixed-bottom bg-primary p-2 d-flex justify-content-center align-items-center gap-5">
            {page > 1 && (
                <button className="btn btn-light" onClick={() => changePage(page - 1)}>Previous</button>
            )}
            {page < totalPages && (
                <button className="btn btn-light" onClick={() => changePage(page + 1)}>Next</button>
            )}
            <p className="text-light mb-0 mt-0">Page {page} of {totalPages}</p>
        </div>
    );
}

export default Footer;
