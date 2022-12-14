import React from 'react';
import './Pagination.css';

const Pagination = ({  page, setPage, itemsFilter }) => {
    const iconNext = ">>";
    const iconPrev = "<<";

    if(itemsFilter.length === 0) return <></>
        return (
            <nav className='pagination'>
                    {
                    page <= 1 ?
                    null
                    :
                    <ul>
                        <li>
                            <button className='buttom-prev' onClick={() => setPage(page - 1)}>{iconPrev}</button>
                        </li>
                    </ul>
                    }
                    {
                    page <= 2 ?             
                    null
                    :
                    <p
                        onClick={() => setPage(page - 2)}
                    >
                    {page -2}
                    </p>
                    }
        
                    {
                    page === 1 ?             
                    null
                    :
                    <p
                        onClick={() => setPage(page - 1)}
                    >
                    {page -1}
                    </p>
                    }
                        <p className="p-border">{page}</p>
                    {
                    page === 42 || (page > 1 &&  itemsFilter.length < 18) ? 
                    null
                    :
                    <p
                        onClick={() => setPage(page + 1)}
                    >
                    {page + 1}
                    </p>
                    }
        
                    {
                    page === 41 || page == 42 || itemsFilter.length < 18  ?
                    null
                    :
                    <p
                        onClick={() => setPage(page + 2)}
                    >
                    {page + 2}
                    </p>
                    }
        
                    {
                    page === 1  && itemsFilter.length > 18 ?             
                    <p
                        onClick={() => setPage(page + 3)}
                    >
                    {page + 3}
                    </p>
                    :
                    null
                    }
                    {
                    page === 42 || itemsFilter.length < 18 ?
                    null
                    :
                    <ul>
                        <li>
                            <button  className='buttom-next' onClick={() => setPage(page + 1)}>{iconNext}</button>
                        </li>
                    </ul>
                    }
            </nav>
          )
}

export default Pagination;