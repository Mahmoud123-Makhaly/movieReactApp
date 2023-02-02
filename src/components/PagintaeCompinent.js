import React from 'react'
import ReactPaginate from 'react-paginate';

const PagintaeCompinent = ({getPagination , pagecount}) => {
    const handlePageClick = (data)=>{
        getPagination(data.selected+1)
    }

  return (
    <ReactPaginate 
    containerClassName={"pagination d-flex justify-content-center"}
    breakLabel="..."
    nextLabel="التالي >"
    previousLabel="السابق"
    onPageChange={handlePageClick}
    pageCount={pagecount}
    pageRangeDisplayed={1}
    marginPagesDisplayed={1}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName = {"page-link"}
    activeClassName={"active"}
/>
  )
}

export default PagintaeCompinent
