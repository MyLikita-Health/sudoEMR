import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { CustomTable } from './components'
import CustomScrollbar from './components/CustomScrollbar'

export default function CustomPaginationNew({
  items = [],
  itemsPerPage,
  fields = [],
  rowStyles = (f) => f,
}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        marginPagesDisplayed={2}
        containerClassName="pagination"
        activeClassName="active"
        // forcePage={pageOffset}
      />

      {currentItems && (
        <CustomScrollbar height="85vh">
          <CustomTable
            bordered
            striped
            fields={fields}
            data={currentItems}
            rowStyles={rowStyles}
          />
        </CustomScrollbar>
      )}
    </div>
  )
}
